import { map } from 'rxjs/operators'

import { receivePage, receivePost, receivePosts } from 'dependencies/store'
import { toDispatch } from 'shared/effects'

import { createQuery, fromUrl, trackRequests } from '../utils'

import * as createTransformers from './transformers'

const { checkRequest, logRequest } = trackRequests()

export default function createTumblrApi({ tumblr }) {
	const transformers = Object.entries(createTransformers).reduce(
		(acc, [key, callback]) => ({
			...acc,
			[key]: callback(tumblr),
		}),
		{}
	)

	const getUrl = (query = {}) =>
		`https://api.tumblr.com/v2/blog/${
			tumblr.account.username
		}.tumblr.com/posts${createQuery({
			api_key: tumblr.consumer_key,
			...query,
		})}`

	return {
		checkRequest,

		getPosts: (_tag = '', page = 1) => {
			const limit = tumblr.itemsPerPage
			const offset = page * limit - limit
			const tag = _tag.replace(/-/g, ' ')

			logRequest('getPosts', _tag, page)

			return fromUrl(
				getUrl({
					limit,
					offset,
					tag,
				})
			).pipe(
				map(({ response }) => response),
				map(({ posts, total_posts }) => {
					const pageCount = Math.ceil(
						total_posts / tumblr.itemsPerPage
					)
					const pageData = []
					const postData = {}
					posts.forEach(post => {
						pageData.push({
							postId: post.id,
							postSlug: post.slug,
							tags: post.tags,
							image:
								post.photos && post.photos[0].original_size.url,
						})
						postData[post.id] = transformers.transformPost(post)
					})

					return {
						page,
						pageCount,
						pageData,
						posts: postData,
						tag,
					}
				}),
				map(({ page, pageCount, pageData, posts, tag }) => [
					receivePosts(posts),
					receivePage(tag, page, pageCount, pageData),
				]),
				map(([receivePosts, receivePage]) => [
					toDispatch(receivePosts),
					toDispatch(receivePage),
				])
			)
		},

		getPost: id => {
			logRequest('getPost', id)

			return fromUrl(getUrl({ id })).pipe(
				map(response => response.json()),
				map(({ response }) => response.posts[0]),
				map(post => transformers.transformPost(post)),
				map(receivePost),
				map(toDispatch)
			)
		},
	}
}

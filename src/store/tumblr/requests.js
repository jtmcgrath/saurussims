import { api } from 'tumblr'

import { receivePage, receivePost, receivePosts } from './actions'
import { REQUEST_PAGE, REQUEST_POST } from './actionTypes'
import { transformPost } from './transformers'

export const requestPost = (route, postId) => dispatch => {
	dispatch({ type: REQUEST_POST, postId })

	api.getPost(postId).then(({ post }) => {
		dispatch(receivePost(post))
	})
}

export const requestPage = (route, page, tag) => dispatch => {
	dispatch({ type: REQUEST_PAGE, page, tag })

	api.getPosts(tag, page).then(({ posts, total_posts }) => {
		const pageCount = Math.ceil(total_posts / 20)
		const pageData = []
		const postData = {}
		posts.forEach(post => {
			pageData.push({ postId: post.id, postSlug: post.slug || undefined })
			postData[post.id] = transformPost(post)
		})
		dispatch(receivePosts(postData))
		dispatch(receivePage(tag, page, pageCount, pageData))
	})
}

import { createQuery } from './utils'

export default function createTumblrApi({ tumblr }) {
	const getUrl = (query = {}) =>
		`https://api.tumblr.com/v2/blog/${
			tumblr.account.username
		}.tumblr.com/posts${createQuery({
			api_key: tumblr.consumer_key,
			...query,
		})}`

	return {
		getPosts: (_tag = '', page = 1) => {
			const limit = tumblr.itemsPerPage
			const offset = page * limit - limit
			const tag = _tag.replace(/-/g, ' ')

			return fetch(getUrl({ limit, offset, tag }))
				.then(response => response.json())
				.then(({ response }) => response)
				.then(({ posts, total_posts }) => ({ posts, total_posts }))
		},

		getPost: id =>
			fetch(getUrl({ id }))
				.then(response => response.json())
				.then(({ response }) => response.posts[0])
				.then(post => ({ post })),
	}
}

import config from 'config'
import { createQuery } from 'utils/general'

const getUrl = (query = {}) =>
	`https://api.tumblr.com/v2/blog/${
		window.config.account.username
	}.tumblr.com/posts${createQuery({
		api_key: config.TUMBLR.consumer_key,
		...query,
	})}`

export default {
	getPosts: (_tag = '', page = 1) => {
		const offset = page * 20 - 20
		const tag = _tag.replace(/-/g, ' ')

		return fetch(getUrl({ offset, tag }))
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

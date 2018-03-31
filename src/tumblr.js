import config from 'config'

const baseUrl = `https://api.tumblr.com/v2/blog/${
	window.config.account.username
}.tumblr.com/posts?api_key=${config.TUMBLR.consumer_key}`

export default {
	getPosts: (_tag = '', page = 1) => {
		const offset = page * 20 - 20
		const tag = _tag.replace(/-/g, ' ')

		return fetch(`${baseUrl}&offset=${offset}&tag=${tag}`)
			.then(response => response.json())
			.then(({ response }) => response)
			.then(({ posts, total_posts }) => ({ posts, total_posts }))
	},

	getPost: id =>
		fetch(`${baseUrl}&id=${id}`)
			.then(response => response.json())
			.then(({ response }) => response.posts[0])
			.then(post => ({ post })),
}

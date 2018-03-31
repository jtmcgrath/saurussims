import tumblrJs from 'tumblr.js'
import config from 'config'

const client = tumblrJs.createClient(config.TUMBLR)

export default {
	getPosts: (_tag = '') => (page = 1) => callback => {
		const offset = page * 20 - 20
		const tag = _tag.replace(/-/g, ' ')
		client.blogPosts(window.config.account.tumblr, { tag, offset }, callback)
	},

	getPost: id => callback => {
		client.blogPosts(window.config.account.tumblr, { id }, (err, { posts }) =>
			callback(err, { post: posts[0] }),
		)
	},
}

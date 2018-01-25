import tumblrJs from 'tumblr.js'
import config from 'config'

const client = tumblrJs.createClient(config.TUMBLR)

export default {
	getPosts: (tag = '') => (page = 1) => callback => {
		const offset = page * 20 - 20
		client.blogPosts('saurussims', { tag, offset }, callback)
	},
}

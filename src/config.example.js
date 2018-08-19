export default {
	...window.config,
	contentful: {
		...window.config.contentful,
		access_token: 'ACCESSTOKEN',
		space_id: 'SPACEID',
		content_types: ['download', 'sim'],
	},
	tumblr: {
		...window.config.tumblr,
		consumer_key: 'CONSUMERKEY',
		consumer_secret: 'CONSUMERSECRET',
	},
}

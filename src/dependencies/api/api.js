import contentfulApi from './contentful'
import tumblrApi from './tumblr'

export const configureApi = config => ({
	contentful: contentfulApi(config),
	tumblr: tumblrApi(config),
})

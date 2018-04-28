import config from 'config'
import { createQuery } from 'utils/general'

const getUrl = (path, query = {}) =>
	`https://cdn.contentful.com/spaces/${
		config.CONTENTFUL.space_id
	}/${path}${createQuery({
		access_token: config.CONTENTFUL.access_token,
		...query,
	})}`

export default {
	getEntries: content_type =>
		fetch(getUrl('entries', { content_type })).then(response =>
			response.json(),
		),
}

import config from 'config'
import { createQuery } from 'utils/general'

const getUrl = (path, query = {}) =>
	`https://cdn.contentful.com/spaces/${
		config.CONTENTFUL.space_id
	}/${path}${createQuery({
		access_token: config.CONTENTFUL.access_token,
		...query,
	})}`

const orderedTypes = ['download']

const getQuery = content_type =>
	orderedTypes.includes(content_type)
		? { content_type, order: '-fields.order' }
		: { content_type }

export default {
	getEntries: content_type =>
		fetch(getUrl('entries', getQuery(content_type))).then(
			response => response.json()
		),
}

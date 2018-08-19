import { createQuery } from './utils'

export default function createContentfulApi({ contentful }) {
	const getUrl = (path, query = {}) =>
		`https://cdn.contentful.com/spaces/${
			contentful.space_id
		}/${path}${createQuery({
			access_token: contentful.access_token,
			...query,
		})}`

	const orderedTypes = ['download']

	const getQuery = content_type =>
		orderedTypes.includes(content_type)
			? { content_type, order: '-fields.order' }
			: { content_type }

	return {
		getEntries: content_type =>
			fetch(getUrl('entries', getQuery(content_type))).then(response =>
				response.json()
			),
	}
}

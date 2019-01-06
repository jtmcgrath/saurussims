import createTransformer from './apiTransformer'

const toQueryString = arr =>
	arr.filter(Boolean).reduce((str, [key, val]) => `${str}&${key}=${val}`, '')

const getUrl = (app, { accessToken, itemsPerPage, spaceId }, query) =>
	`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=${app}&limit=${itemsPerPage}${toQueryString(
		query
	)}`

export default function createApi(app, variables) {
	const { contentType } = app
	const transformData = createTransformer(contentType)

	return {
		fetch: ({ download, tags = '', page }) =>
			fetch(
				getUrl(contentType, variables, [
					contentType === 'download' && ['order', '-fields.order'],
					tags && tags.length && ['fields.tags[all]', tags.join(',')],
					download && ['fields.download[exists]', 'true'],
					['skip', (page - 1) * variables.itemsPerPage],
				])
			)
				.then(res => res.json())
				.then(transformData),
	}
}

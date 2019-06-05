import createTransformer from './apiTransformer'

const toQueryString = arr =>
	arr.filter(Boolean).reduce((str, [key, val]) => `${str}&${key}=${val}`, '')

const getUrl = (app, { accessToken, itemsPerPage, spaceId }, query) =>
	`https://cdn.contentful.com/spaces/${spaceId}/entries?access_token=${accessToken}&content_type=${app}&limit=${itemsPerPage}${toQueryString(
		query
	)}`

const retiredOptions = {
	only: ['fields.retired', 'true'],
	hide: ['fields.retired[nin]', 'true'],
}

export default function createApi(app, variables) {
	const { contentType, toggles = [] } = app
	const transformData = createTransformer(contentType)

	return {
		fetch: ({ tags = '', page, retired, ...state }) =>
			fetch(
				getUrl(contentType, variables, [
					['skip', (page - 1) * variables.itemsPerPage],
					contentType === 'download' && ['order', '-fields.order'],
					tags && tags.length && ['fields.tags[all]', tags.join(',')],
					retired && retiredOptions[retired],
					...toggles
						.filter(toggle => state[toggle])
						.map(toggle => [`fields.${toggle}[exists]`, 'true']),
				])
			)
				.then(res => res.json())
				.then(transformData),
	}
}

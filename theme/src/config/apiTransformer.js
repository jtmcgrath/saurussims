import { get } from '../utils'

const calculatePagination = (limit, skip, total) => ({
	current: skip / limit + 1,
	pages: Array.from(Array(Math.ceil(total / limit)), (_, indwx) => indwx + 1),
})

const transformAssets = assets =>
	assets &&
	assets.reduce((acc, cur) => {
		Object.assign(acc, { [cur.sys.id]: cur.fields.file.url })
		return acc
	}, {})

const transformDownload = assets => download => {
	const [, postId, postSlug] =
		download.fields.link.match(/http.*.tumblr.com\/post\/(\d*)\/?(.*)?/) ||
		[]

	const linkData = postId
		? { postId, postSlug }
		: { link: download.fields.link }

	return {
		type: 'download',
		...download.fields,
		...linkData,
		image: assets[get(download, 'fields', 'image', 'sys', 'id')],
	}
}

const transformResource = assets => resource => ({
	type: 'resource',
	...resource.fields,
	image: assets[get(resource, 'fields', 'image', 'sys', 'id')],
})

const transformSim = assets => sim => ({
	type: 'sim',
	...sim.fields,
	image: assets[sim.fields.image.sys.id],
})

const transformers = {
	download: transformDownload,
	resource: transformResource,
	sim: transformSim,
}

export default function createTransformer(contentType) {
	const transformItems = (assets, items) =>
		items && items.map(transformers[contentType](assets))

	return ({
		includes: { Asset: _assets = [] } = {},
		items: _items,
		limit,
		skip,
		total,
	}) => {
		const assets = transformAssets(_assets)
		const items = transformItems(assets, _items)
		const pagination = calculatePagination(limit, skip, total)

		return {
			items,
			pagination,
		}
	}
}

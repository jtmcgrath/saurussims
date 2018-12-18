export const get = (obj, ...paths) => {
	let value = obj
	for (let key of paths) {
		if (!value) {
			break
		}
		value = value[key]
	}
	return value
}

const calculatePagination = (limit, skip, total) => ({
	current: skip / limit + 1,
	pages: Array.from(Array(Math.ceil(total / limit)), (_, index) => index + 1),
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
		image: assets[get(download, 'fields.image.sys.id')],
	}
}

const transformSim = assets => sim => ({
	type: 'sim',
	...sim.fields,
	image: assets[sim.fields.image.sys.id],
})

export default function createTransformer(contentType) {
	const transformItems = (assets, items) =>
		items &&
		items.map(
			contentType === 'sim'
				? transformSim(assets)
				: transformDownload(assets)
		)

	return ({
		includes: { Asset: _assets } = {},
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

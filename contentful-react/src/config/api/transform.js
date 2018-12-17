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

export const transformAssets = assets =>
	assets.reduce(
		(acc, cur) => ({
			...acc,
			[cur.sys.id]: cur.fields.file.url,
		}),
		{}
	)

export const transformDownload = assets => download => {
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

export const transformSim = assets => sim => ({
	type: 'sim',
	...sim.fields,
	image: assets[sim.fields.image.sys.id],
})

export const transformItems = (contentType, items, assets) => {
	switch (contentType) {
		case 'download': {
			return items.map(transformDownload(assets))
		}

		case 'sim': {
			return items.map(transformSim(assets))
		}

		default: {
			return items
		}
	}
}

export default contentType => ({
	response: {
		includes: { Asset: _assets },
		items: _items,
	},
}) => {
	const assets = transformAssets(_assets)
	const items = transformItems(contentType, _items, assets)

	return items
}

import { get } from 'utils/general'

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

	const linkData = postId ? { postId, postSlug } : { link: download.fields.link }

	return {
		...download.fields,
		...linkData,
		image: assets[get(download, 'fields.image.sys.id')],
	}
}

export const transformSim = assets => sim => ({
	...sim.fields,
	image: assets[sim.fields.image.sys.id],
})

export const transformDownloads = (contentType, downloads, assets) => {
	switch (contentType) {
		case 'download': {
			return downloads.map(transformDownload(assets))
		}

		case 'sim': {
			return downloads.map(transformSim(assets))
		}

		default: {
			return downloads
		}
	}
}

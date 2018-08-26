import { get } from 'shared/utils'

export const transformAssets = config => assets =>
	assets.reduce(
		(acc, cur) => ({
			...acc,
			[cur.sys.id]: cur.fields.file.url,
		}),
		{}
	)

export const transformDownload = config => assets => download => {
	const [, postId, postSlug] =
		download.fields.link.match(/http.*.tumblr.com\/post\/(\d*)\/?(.*)?/) ||
		[]

	return {
		...download.fields,
		postId,
		postSlug,
		image: assets[get(download, 'fields.image.sys.id')],
	}
}

export const transformSim = config => assets => sim => ({
	...sim.fields,
	image: assets[sim.fields.image.sys.id],
})

export const transformDownloads = config => (
	contentType,
	downloads,
	assets
) => {
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

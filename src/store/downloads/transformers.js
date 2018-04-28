export const transformAssets = assets =>
	assets.reduce(
		(acc, cur) => ({
			...acc,
			[cur.sys.id]: cur.fields.file.url,
		}),
		{},
	)

export const transformDownload = assets => download => ({
	...download.fields,
	image: assets[download.fields.image.sys.id],
})

export const transformDownloads = (downloads, assets) =>
	downloads.map(transformDownload(assets))

export const transformAssets = assets =>
	assets.reduce(
		(acc, cur) => ({
			...acc,
			[cur.sys.id]: cur.fields.file.url,
		}),
		{},
	)

export const transformDownload = assets => download => {
	const [_, postId, postSlug] =
		download.fields.link.match(/http.*.tumblr.com\/post\/(\d*)\/?(.*)?/) || []

	return {
		...download.fields,
		postId,
		postSlug,
		image: assets[download.fields.image.sys.id],
	}
}

export const transformDownloads = (downloads, assets) =>
	downloads.map(transformDownload(assets))

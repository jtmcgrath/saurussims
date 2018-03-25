export const transformPost = post => {
	const photos = (post.photos || []).map(
		({ alt_sizes, caption, original_size }) => ({
			caption,
			original: original_size.url,
			thumbnail: alt_sizes.reduce(
				(acc, alt) =>
					alt.width > window.config.columnWidth && alt.width < acc.width
						? alt
						: acc,
				{ width: 99999 },
			).url,
		}),
	)

	return { ...post, photos }
}

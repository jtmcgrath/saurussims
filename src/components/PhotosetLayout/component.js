import React from 'react'

import Photoset from './Photoset'

const PhotosetLayout = ({ layout, onClick, photos, styles }) => {
	if (!photos) return null

	if (!layout) return (
		<Photoset
			onClick={onClick}
			photos={photos}
		/>
	)

	return layout.split('').reduce(
		(acc, quantity) => {
			const { start } = acc
			const end = start + parseInt(quantity, 10)

			acc.elements.push(
				<div key={`${start}-${end}`} className={styles.row}>
					<Photoset
						baseIndex={start}
						className={styles.button}
						onClick={onClick}
						photos={photos.slice(start, end)}
					/>
				</div>,
			)
			acc.start = end

			return acc
		},
		{ elements: [], start: 0 },
	).elements
}

export default PhotosetLayout

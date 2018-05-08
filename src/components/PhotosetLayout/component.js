import React from 'react'

const PhotosetLayout = ({ layout, onClick, photos, styles }) => {
	if (!layout || !photos) return null

	return layout.split('').reduce(
		(acc, quantity) => {
			const { start } = acc
			const end = start + parseInt(quantity, 10)

			acc.elements.push(
				<div key={`${start}-${end}`} className={styles.row}>
					{photos.slice(start, end).map(({ caption, original }, index) => (
						<button
							key={original}
							onClick={onClick({ caption, index: index + start, original })}
							className={styles.button}
						>
							<img src={original} alt={caption} />
						</button>
					))}
				</div>,
			)
			acc.start = end

			return acc
		},
		{ elements: [], start: 0 },
	).elements
}

export default PhotosetLayout

import React from 'react'

import Photoset from './Photoset'
import Row from './PhotosetLayout.styles'

const PhotosetLayout = ({ layout, onClick, photos }) =>
	!photos ? null : !layout ? (
		<Photoset onClick={onClick} photos={photos} />
	) : (
		layout.split('').reduce(
			(acc, quantity) => {
				const { start } = acc
				const end = start + parseInt(quantity, 10)

				acc.elements.push(
					<Row key={`${start}-${end}`}>
						<Photoset
							baseIndex={start}
							onClick={onClick}
							photos={photos.slice(start, end)}
						/>
					</Row>
				)
				acc.start = end

				return acc
			},
			{ elements: [], start: 0 }
		).elements
	)

export default PhotosetLayout

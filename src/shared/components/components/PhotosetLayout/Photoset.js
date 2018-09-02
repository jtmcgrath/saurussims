import React from 'react'

import Button from './Photoset.styles'

const Photoset = ({ baseIndex, onClick, photos }) =>
	photos.map(({ caption, original }, index) => (
		<Button
			key={original}
			onClick={
				onClick &&
				onClick({ caption, index: index + baseIndex, original })
			}
		>
			<img src={original} alt={caption} />
		</Button>
	))

Photoset.defaultProps = {
	baseIndex: 0,
}

export default Photoset

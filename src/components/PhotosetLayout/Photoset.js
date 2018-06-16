import React from 'react'

const Photoset = ({ baseIndex, className, onClick, photos }) =>
	photos.map(({ caption, original }, index) => (
		<button
			key={original}
			onClick={onClick && onClick({ caption, index: index + baseIndex, original })}
			className={className}
		>
			<img src={original} alt={caption} />
		</button>
	))

Photoset.defaultProps = {
	baseIndex: 0
}

export default Photoset

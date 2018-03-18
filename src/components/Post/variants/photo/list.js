import React, { Fragment } from 'react'

const Photo = ({ photos }) => (
	<Fragment>
		{photos &&
			photos.map(({ caption, original_size: { url } }, i) => (
				<img key={i} src={url} alt={caption} />
			))}
	</Fragment>
)

export default Photo

import React from 'react'

const Photo = ({ styles, photos }) => (
	<article className={styles.listItem}>
		{photos &&
			photos.map(({ caption, thumbnail }, i) => (
				<img key={thumbnail} src={thumbnail} alt={caption} />
			))}
	</article>
)

export default Photo

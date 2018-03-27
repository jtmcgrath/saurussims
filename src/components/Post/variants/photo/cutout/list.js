import React from 'react'
import { Link } from 'react-router5'

const Cutout = ({ linkProps, styles, photos, tags }) => (
	<article className={styles.marginOnly}>
		<Link {...linkProps}>
			<img src={photos[0].original} alt={photos[0].caption} />
		</Link>
	</article>
)

export default Cutout

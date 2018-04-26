import React from 'react'
import { Link } from 'react-router5'
import classNames from 'classnames'

const Cutout = ({ linkProps, styles, postActions, photos, tags }) => (
	<article
		className={classNames(styles.marginOnly, styles.postActions, styles.cutout)}
	>
		<Link {...linkProps}>
			<img src={photos[0].original} alt={photos[0].caption} />
		</Link>
		{postActions}
	</article>
)

export default Cutout

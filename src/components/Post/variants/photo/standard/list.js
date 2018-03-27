import React from 'react'
import { Link } from 'react-router5'
import classNames from 'classnames'

const Standard = ({ linkProps, styles, postActions, photos, tags }) => (
	<article className={classNames(styles.listItem, styles.postActions)}>
		<Link
			{...linkProps}
			className={classNames(linkProps.className, styles.listItemPadding)}
		>
			{photos &&
				photos.map(({ caption, thumbnail }, i) => (
					<img key={thumbnail} src={thumbnail} alt={caption} />
				))}
		</Link>
		{postActions}
	</article>
)

export default Standard

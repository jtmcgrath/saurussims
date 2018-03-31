import React from 'react'
import { Link } from 'react-router5'
import classNames from 'classnames'

const Standard = ({ linkProps, styles, postActions, photos, tags }) => {
	const photoElements =
		photos &&
		photos.map(({ caption, thumbnail }, i) => (
			<img key={thumbnail} src={thumbnail} alt={caption} />
		))

	return (
		<article className={classNames(styles.listItem, styles.postActions)}>
			<Link
				{...linkProps}
				className={classNames(linkProps.className, styles.listItemPadding)}
			>
				{photoElements}
			</Link>
			{postActions}
		</article>
	)
}

export default Standard

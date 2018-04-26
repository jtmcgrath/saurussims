import React from 'react'
import { Link } from 'react-router5'
import classNames from 'classnames'

const Standard = ({ columnCount, linkProps, styles, postActions, photos, tags }) => {
	const photoElements =
		photos &&
		photos.map(({ caption, thumbnail }, i) => (
			<img key={thumbnail} src={thumbnail} alt={caption} />
		))

	const ConditionalLink = columnCount > 1 ? Link : 'div'

	return (
		<article className={classNames(styles.listItem, styles.postActions)}>
			<ConditionalLink
				{...linkProps}
				className={classNames(linkProps.className, styles.listItemPadding)}
			>
				{photoElements}
			</ConditionalLink>
			{postActions}
		</article>
	)
}

export default Standard

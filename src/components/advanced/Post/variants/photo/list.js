import React from 'react'
import { Link } from 'react-router5'
import classNames from 'classnames'

import { PhotosetLayout } from 'components'

const Standard = ({
	columnCount,
	isCutout,
	linkProps,
	photos,
	photoset_layout,
	postActions,
	styles,
}) => {
	const ConditionalLink = columnCount > 1 ? Link : 'div'

	return (
		<article
			className={classNames(
				styles.postActions,
				isCutout
					? classNames(styles.cutout, styles.marginOnly)
					: styles.listItem,
			)}
		>
			<ConditionalLink
				{...linkProps}
				className={classNames(linkProps.className, styles.listItemPadding)}
			>
				<PhotosetLayout layout={photoset_layout} photos={photos} />
			</ConditionalLink>
			{postActions}
		</article>
	)
}

export default Standard

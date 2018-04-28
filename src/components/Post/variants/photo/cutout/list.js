import React from 'react'
import { Link } from 'react-router5'
import classNames from 'classnames'

const Cutout = ({
	columnCount,
	linkProps,
	styles,
	postActions,
	photos,
	tags,
}) => {
	const ConditionalLink = columnCount > 1 ? Link : 'div'

	return (
		<article
			className={classNames(
				styles.marginOnly,
				styles.postActions,
				styles.cutout,
			)}
		>
			<ConditionalLink {...linkProps}>
				<img src={photos[0].original} alt={photos[0].caption} />
			</ConditionalLink>
			{postActions}
		</article>
	)
}

export default Cutout

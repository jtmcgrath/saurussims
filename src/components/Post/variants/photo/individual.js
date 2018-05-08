import React from 'react'
import classNames from 'classnames'

import { Gallery, PhotosetLayout, Sidebar } from 'components'

const Standard = ({
	caption,
	isCutout,
	photos,
	photoset_layout,
	setState,
	styles,
	...props
}) => {
	const captionElement = caption && (
		<div
			className={isCutout ? styles.paddingBottom : styles.extraPadded}
			dangerouslySetInnerHTML={{ __html: caption }}
		/>
	)

	return (
		<article className={classNames(styles.responsiveWrapper, styles.wrapper)}>
			<div
				className={classNames(
					{ [styles.listItem]: !isCutout },
					styles.listItemPadding,
					styles.wide,
				)}
			>
				<PhotosetLayout
					layout={photoset_layout}
					onClick={({ index }) => () => setState({ active: index })}
					photos={photos}
				/>
				{!isCutout && captionElement}
			</div>
			<div className={styles.narrow}>
				<Sidebar {...props} caption={caption} styles={styles}>
					{isCutout && captionElement}
				</Sidebar>
			</div>
			<Gallery photos={photos} setState={setState} {...props} />
		</article>
	)
}

export default Standard

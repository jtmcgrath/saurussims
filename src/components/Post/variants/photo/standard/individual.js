import React from 'react'
import classNames from 'classnames'

import { Gallery, Sidebar } from 'components'

const Standard = ({ caption, photos, setState, styles, ...props }) => {
	const photoElements =
		photos &&
		photos.map(({ caption, original }, i) => (
			<button key={original} onClick={() => setState({ active: i })}>
				<img src={original} alt={caption} />
			</button>
		))

	const captionElement = caption && (
		<div
			className={classNames(styles.extraPadded)}
			dangerouslySetInnerHTML={{ __html: caption }}
		/>
	)

	return (
		<article className={classNames(styles.responsiveWrapper, styles.wrapper)}>
			<div
				className={classNames(
					styles.listItem,
					styles.listItemPadding,
					styles.wide,
				)}
			>
				{photoElements}
				{captionElement}
			</div>
			<div className={styles.narrow}>
				<Sidebar {...props} caption={caption} styles={styles} />
			</div>
			<Gallery photos={photos} setState={setState} {...props} />
		</article>
	)
}

export default Standard

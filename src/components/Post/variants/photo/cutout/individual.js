import React from 'react'
import classNames from 'classnames'

import { Gallery, Sidebar } from 'components'

const Cutout = ({ caption, photos, setState, styles, ...props }) => {
	const captionElement = caption && (
		<div
			className={styles.paddingBottom}
			dangerouslySetInnerHTML={{ __html: caption }}
		/>
	)

	return (
		<article className={classNames(styles.wrapper, styles.responsiveWrapper)}>
			<button
				className={classNames(styles.wide, styles.marginOnly)}
				onClick={() => setState({ active: 0 })}
			>
				<img src={photos[0].original} alt={photos[0].caption} />
			</button>
			<div className={styles.narrow}>
				<Sidebar {...props} caption={caption} styles={styles}>
					{captionElement}
				</Sidebar>
			</div>
			<Gallery photos={photos} setState={setState} {...props} />
		</article>
	)
}

export default Cutout

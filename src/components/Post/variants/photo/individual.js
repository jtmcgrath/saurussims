import React from 'react'
import classNames from 'classnames'

import { Sidebar } from 'components'

const Photo = ({ caption, notes, photos, styles, ...props }) => (
	<article className={classNames(styles.wrapper, styles.responsiveWrapper)}>
		<div className={classNames(styles.wide, styles.listItem)}>
			{photos &&
				photos.map(({ caption, original }, i) => (
					<img key={original} src={original} alt={caption} />
				))}
			{caption && (
				<div
					className={classNames(styles.extraPadded)}
					dangerouslySetInnerHTML={{ __html: caption }}
				/>
			)}
		</div>
		<div className={styles.narrow}>
			<Sidebar {...props} caption={caption} styles={styles} />
		</div>
	</article>
)

export default Photo

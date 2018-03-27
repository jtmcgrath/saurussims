import React from 'react'
import classNames from 'classnames'

import { Gallery, Sidebar } from 'components'

const Standard = ({ caption, photos, setState, styles, ...props }) => (
	<article className={classNames(styles.wrapper, styles.responsiveWrapper)}>
		<div
			className={classNames(
				styles.wide,
				styles.listItem,
				styles.listItemPadding,
			)}
		>
			{photos &&
				photos.map(({ caption, original }, i) => (
					<button key={original} onClick={() => setState({ active: i })}>
						<img src={original} alt={caption} />
					</button>
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
		<Gallery photos={photos} setState={setState} {...props} />
	</article>
)

export default Standard

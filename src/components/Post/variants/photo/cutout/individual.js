import React from 'react'
import classNames from 'classnames'

import { Gallery, Sidebar } from 'components'

const Cutout = ({ caption, photos, setState, styles, ...props }) => (
	<article className={classNames(styles.wrapper, styles.responsiveWrapper)}>
		<button
			className={classNames(styles.wide, styles.marginOnly)}
			onClick={() => setState({ active: 0 })}
		>
			<img src={photos[0].original} alt={photos[0].caption} />
		</button>
		<div className={styles.narrow}>
			<Sidebar {...props} caption={caption} styles={styles} />
		</div>
		<Gallery photos={photos} setState={setState} {...props} />
	</article>
)

export default Cutout

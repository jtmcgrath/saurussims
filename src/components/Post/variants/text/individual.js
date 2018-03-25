import React from 'react'
import classNames from 'classnames'

import { Sidebar } from 'components'

const Text = ({ body, styles, ...props }) => (
	<article className={classNames(styles.wrapper, styles.responsiveWrapper)}>
		<div
			className={classNames(styles.wide, styles.text)}
			dangerouslySetInnerHTML={{ __html: body }}
		/>
		<div className={styles.narrow}>
			<Sidebar {...props} styles={styles} />
		</div>
	</article>
)

export default Text

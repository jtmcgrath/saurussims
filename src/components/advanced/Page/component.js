import React from 'react'
import classNames from 'classnames'

const Page = ({ className, children, styles, ...props }) => (
	<div className={classNames(className, styles.wrapper)}>
		<div className={styles.content}>
			{typeof children === 'function'
				? children({ styles, ...props })
				: children}
		</div>
	</div>
)

export default Page

import React from 'react'

const Page = ({ children, styles, ...props }) => (
	<div className={styles.wrapper}>
		<div className={styles.content}>
			{typeof children === 'function'
				? children({ styles, ...props })
				: children}
		</div>
	</div>
)

export default Page

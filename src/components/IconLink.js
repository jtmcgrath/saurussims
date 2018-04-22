import React from 'react'

import { Icon, Link } from 'components'

const IconLink = ({ children, icon, styles, ...props }) => (
	<Link className={styles.link} {...props}>
		<Icon className={styles.linkIcon} icon={icon} />
		<span className={styles.linkText}>{children}</span>
	</Link>
)

export default IconLink

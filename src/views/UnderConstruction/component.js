import React from 'react'

import { Link } from 'components'

const UnderConstruction = ({ linkProps, route, styles, tagName }) => (
	<div className={styles.wrapper}>
		<div className={styles.content}>
			<header className={styles.header}>
				<h1>{route}</h1>
				<h3>Under construction</h3>
			</header>
			<p>
				<Link {...linkProps}>
					For now, please click here to view the <strong>{tagName}</strong> tag
					instead!
				</Link>
			</p>
		</div>
	</div>
)

export default UnderConstruction

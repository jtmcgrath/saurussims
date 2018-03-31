import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router5'

import { Navigation } from 'components'

const Header = ({ avatar, className, description, styles, title }) => (
	<header className={classNames(className, styles.header)}>
		<div className={styles.float}>
			<Link className={styles.content} routeName="all">
				<img className={styles.avatar} src={avatar} alt={title} />
				<h1>{title}</h1>
				{description && <h4>{description}</h4>}
			</Link>
			<Navigation />
		</div>
	</header>
)

export default Header

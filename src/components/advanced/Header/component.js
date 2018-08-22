import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router5'

import { Navigation, Terms } from 'components'

const Header = ({ avatar, className, description, styles, terms, title }) => (
	<header className={classNames(className, styles.header)}>
		<div className={styles.float}>
			<Link className={styles.content} routeName="all">
				<img className={styles.avatar} src={avatar.image} alt={title} />
				<h1>{title}</h1>
				{description && <h4>{description}</h4>}
			</Link>
			<Navigation />
			{terms && <Terms terms={terms} center />}
		</div>
	</header>
)

export default Header

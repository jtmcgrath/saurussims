import React from 'react'
import classNames from 'classnames'

import { Link, List } from 'components'

const Navigation = ({ styles, ...props }) => (
	<nav className={styles.nav}>
		<div className={styles.content}>
			{window.config.navigation.map(({ key: listKey, items }) => (
				<List
					key={listKey}
					className={classNames(styles.list, styles[listKey])}
					itemClassName={styles.listItem}
				>
					{items.map(({ onClick, ...item }) => (
						<Link
							{...item}
							className={styles.link}
							onClick={onClick && (() => onClick({ ...props, ...item }))}
						/>
					))}
				</List>
			))}
		</div>
	</nav>
)

export default Navigation

import React from 'react'
import classNames from 'classnames'

import { Link, List } from 'components'

const Navigation = ({ navigation, styles, ...props }) => (
	<nav className={styles.nav}>
		<div className={styles.content}>
			{navigation.map(({ key: listKey, items }) => (
				<List
					key={listKey}
					className={classNames(styles.list, styles[listKey])}
					itemClassName={styles.listItem}
				>
					{items.map(({ onClick, hideOnDesktop, ...item }) => (
						<Link
							key={item.children}
							{...item}
							className={classNames(styles.link, {
								[styles.hideOnDesktop]: hideOnDesktop,
							})}
							onClick={
								onClick
									? () => onClick({ ...props, ...item })
									: () => props.setState({ visible: false })
							}
						/>
					))}
				</List>
			))}
		</div>
	</nav>
)

export default Navigation

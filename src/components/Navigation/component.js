import React from 'react'
import classNames from 'classnames'

import { Icon, Link, List } from 'components'

const Navigation = ({ isDesktop, navigation, styles, ...props }) => (
	<nav className={styles.nav}>
		<div className={styles.content}>
			{navigation.map(({ key: listKey, items }) => (
				<List
					key={listKey}
					className={classNames(styles.list, styles[listKey])}
					itemClassName={styles.listItem}
				>
					{items.reduce((acc, { onClick, hideOnDesktop, ...item }) => {
						if (!(hideOnDesktop && isDesktop)) {
							acc.push(
								<Link
									key={item.name}
									{...item}
									className={classNames(styles.link, {
										[styles.hideOnDesktop]: hideOnDesktop,
									})}
									onClick={
										onClick
											? () => onClick({ ...props, ...item })
											: () => props.setState({ visible: false })
									}
								>
									<Icon className={styles.linkIcon} icon={item.icon} />
									<span className={styles.linkText}>{item.name}</span>
								</Link>,
							)
						}
						return acc
					}, [])}
				</List>
			))}
		</div>
	</nav>
)

export default Navigation

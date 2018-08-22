import React from 'react'
import { withState } from 'react-state-hoc'

import { Icon } from 'shared/components'
import { withContext } from 'shared/context'
import { compose } from 'shared/utils'

import Link from './Link'
import List from './List'
import MenuElem from './Menu.styles'

const renderItem = (props, { onClick, ...item }) => (
	<Link
		key={item.name}
		{...item}
		onClick={
			onClick
				? () => onClick({ ...props, ...item })
				: () => props.setState({ visible: false })
		}
	>
		<Icon icon={item.icon} />
		<span>{item.name}</span>
	</Link>
)

const Menu = ({ isDesktop, navigation, ...props }) => (
	<MenuElem {...props}>
		{navigation.map(({ key: listKey, items }) => (
			<List key={listKey} className={listKey} itemClassName="menu-item">
				{items.map(
					item =>
						!(item.hideOnDesktop && isDesktop)
							? renderItem(props, item)
							: null,
					[]
				)}
			</List>
		))}
	</MenuElem>
)

export default compose(
	withContext('tumblr.navigation', 'isDesktop'),
	withState({ visible: false })
)(Menu)

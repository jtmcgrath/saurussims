import React from 'react'
import withState from 'react-state-hoc'
import { connect as connectStyles } from 'react-fela'
import classNames from 'classnames'

import { Link, List } from 'components'

import styles from './Navigation.styles'

const Navigation = ({ styles, ...props }) => (
	<nav className={styles.nav}>
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
	</nav>
)

export default withState({ visible: false })(connectStyles(styles)(Navigation))

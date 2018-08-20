import React from 'react'

import HeaderElem from './Header.styles'
import Logo from './Logo'
import Menu from './Menu'

const Header = props => (
	<HeaderElem {...props}>
		<Logo className="logo" />
		<Menu className="menu" />
	</HeaderElem>
)

export default Header

import React from 'react'

import Content from './Content'
import Header from './Header'
import Main from './Layout.styles'

const Layout = ({ children }) => (
	<Main>
		<Header className="header" />
		<Content className="content">{children}</Content>
	</Main>
)

export default Layout

import React, { createElement } from 'react'
import { RouteNode, RouteProvider } from 'react-router5'
import { ThemeProvider } from 'styled-components'

import GlobalContext from 'shared/context'
import { getRootNode } from 'shared/utils'

import Layout from './Layout'
import Viewport from './Viewport'
import injectGlobalStyles from '../styles/globalStyles'
import createTheme from '../styles/theme'

injectGlobalStyles()

const App = ({ dependencies, routeComponents, tumblr }) => (
	<GlobalContext.Provider value={{ tumblr, ...dependencies }}>
		<Viewport {...tumblr}>
			{viewport => (
				<ThemeProvider theme={createTheme(tumblr, viewport)}>
					<RouteProvider router={dependencies.router}>
						<RouteNode nodeName="">
							{({ route }) => (
								<Layout>
									{createElement(
										routeComponents[
											getRootNode(route.name)
										] || null
									)}
								</Layout>
							)}
						</RouteNode>
					</RouteProvider>
				</ThemeProvider>
			)}
		</Viewport>
	</GlobalContext.Provider>
)

export default App

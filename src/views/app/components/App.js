import React, { createElement } from 'react'
import { RouteNode, RouteProvider } from 'react-router5'
import { ThemeProvider } from 'styled-components'

import GlobalContext from 'shared/context'
import { getRootNode, keep } from 'shared/utils'

import Layout from './Layout'
import Splash from './Splash'
import Viewport from './Viewport'
import injectGlobalStyles from '../styles/globalStyles'
import createTheme from '../styles/theme'

injectGlobalStyles()

const keepColumnProps = keep('columnSpacing', 'columnWidth', 'maxColumns')

const App = ({ dependencies, routeComponents, tumblr }) => (
	<RouteProvider router={dependencies.router}>
		<Viewport {...keepColumnProps(tumblr)}>
			{viewport =>
				viewport ? (
					<GlobalContext.Provider
						value={{ tumblr, ...dependencies, ...viewport }}
					>
						<ThemeProvider theme={createTheme(tumblr, viewport)}>
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
						</ThemeProvider>
					</GlobalContext.Provider>
				) : (
					<Splash />
				)
			}
		</Viewport>
	</RouteProvider>
)

export default App

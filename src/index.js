import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5'
import { createRenderer } from 'fela'
import { Provider as StyleProvider } from 'react-fela'

import { App } from 'components'
import createRouter from 'router'
import configureStore from 'store'
import Config from 'context/config'

import globalStyles from './globalStyles'

const renderer = createRenderer()
renderer.renderStatic(globalStyles)

const router = createRouter()
const store = configureStore(router)

const wrappedApp = (
	<Config.Provider value={window.config}>
		<StyleProvider renderer={renderer}>
			<Provider store={store}>
				<RouterProvider router={router}>
					<App />
				</RouterProvider>
			</Provider>
		</StyleProvider>
	</Config.Provider>
)

router.start((err, state) => {
	render(wrappedApp, document.getElementById('root'))
})

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router5'

import App from './components/App'
import createRouter from './router'
import configureStore from './store'

const router = createRouter()
const store = configureStore(router)

const wrappedApp = (
	<Provider store={store}>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</Provider>
)

router.start((err, state) => {
	render(wrappedApp, document.getElementById('root'))
})

import { createElement } from 'react'
import { render } from 'react-dom'
import { reduxPlugin } from 'redux-router5'

import config from './config'
import bootstrap from './bootstrap'

bootstrap(config).then(app => {
	app.dependencies.router.usePlugin(
		reduxPlugin(app.dependencies.store.dispatch)
	)
	app.dependencies.router.start(() => {
		render(
			createElement(app.appComponent, app),
			document.getElementById('root')
		)
	})
})

import { createElement } from 'react'
import { render } from 'react-dom'

import config from './config'
import bootstrap from './bootstrap'

bootstrap(config).then(app => {
	app.dependencies.router.start(() => {
		render(
			createElement(app.appComponent, app),
			document.getElementById('root')
		)
	})
})

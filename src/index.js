import { createElement } from 'react'
import { render } from 'react-dom'

import bootstrap from './bootstrap'

bootstrap().then(app => {
	app.dependencies.router.start(() => {
		render(
			createElement(app.appComponent, app),
			document.getElementById('root')
		)
	})
})

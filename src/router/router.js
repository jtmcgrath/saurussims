import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'
import listenersPlugin from 'router5/plugins/listeners'

import onRouteActivate from './onRouteActivate'
import routes from './routes'

const configureRouter = () =>
	createRouter(routes)
		.usePlugin(browserPlugin())
		.usePlugin(listenersPlugin())
		.useMiddleware(onRouteActivate(routes))

export default configureRouter

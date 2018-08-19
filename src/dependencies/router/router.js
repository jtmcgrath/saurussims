import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'
import listenersPlugin from 'router5/plugins/listeners'

export const configureRouter = ({ defaultRoute, routes }) =>
	createRouter(routes, { defaultRoute })
		.usePlugin(browserPlugin())
		.usePlugin(listenersPlugin())

import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'
import loggerPlugin from 'router5/plugins/logger'

export const configureRouter = ({ defaultRoute, routes }) =>
	createRouter(routes, { defaultRoute })
		.usePlugin(browserPlugin())
		.usePlugin(loggerPlugin)

import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'
import listenersPlugin from 'router5/plugins/listeners'
import loggerPlugin from 'router5/plugins/logger'
import { reduxPlugin } from 'redux-router5'

export const configureRouter = ({ defaultRoute, routes }) => {
	const router = createRouter(routes, { defaultRoute })
		.usePlugin(browserPlugin())
		.usePlugin(listenersPlugin())
		.usePlugin(loggerPlugin)

	return {
		...router,
		start: (app, done) =>
			router
				.usePlugin(reduxPlugin(app.dependencies.store.dispatch))
				.start(done),
	}
}

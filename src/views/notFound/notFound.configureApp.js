import PrintProps from 'shared/printProps'

const notFoundConfig = app => {
	app.addDefaultRoute('notFound')
	app.addRouteComponents({
		notFound: PrintProps,
	})
	app.addRoutes([{ name: 'notFound', path: '/404' }])
}

export default notFoundConfig

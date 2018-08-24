import PrintProps from 'shared/printProps'

const simsConfig = app => {
	app.addRouteComponents({
		sims: PrintProps,
	})
	app.addRoutes([{ name: 'sims', path: '/sims' }])
}

export default simsConfig

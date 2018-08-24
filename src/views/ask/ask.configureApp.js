import PrintProps from 'shared/printProps'

const askConfig = app => {
	app.addRouteComponents({
		ask: PrintProps,
	})
	app.addRoutes([
		{
			name: 'ask',
			path: '/ask',
		},
	])
}

export default askConfig

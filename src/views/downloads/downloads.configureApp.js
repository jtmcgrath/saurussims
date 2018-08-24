import PrintProps from 'shared/printProps'

const downloadsConfig = app => {
	app.addRouteComponents({
		downloads: PrintProps,
	})
	app.addRoutes([
		{
			name: 'downloads',
			path: '/downloads',
		},
	])
}

export default downloadsConfig

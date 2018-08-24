import PrintProps from 'shared/printProps'

const tagConfig = app => {
	app.addRouteComponents({
		tag: PrintProps,
	})
	app.addRoutes([
		{
			name: 'tag',
			path: '/tagged/:tagName',
			children: [
				{ name: 'index', path: '/page/1', forwardTo: 'tag' },
				{
					name: 'page',
					path: '/page/:pageId',
				},
			],
		},
	])
}

export default tagConfig

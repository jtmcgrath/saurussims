import PrintProps from 'shared/printProps'

const allConfig = {
	routeComponents: {
		all: PrintProps,
	},
	routes: [
		{
			name: 'all',
			path: '/',
			children: [
				{ name: 'index', path: 'page/1', forwardTo: 'all' },
				{
					name: 'page',
					path: 'page/:pageId',
				},
			],
		},
	],
}

export default allConfig

const allConfig = {
	routeComponents: {
		all: () => null,
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

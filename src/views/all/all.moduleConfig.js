import Test from 'shared/test'

const allConfig = {
	routeComponents: {
		all: Test,
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

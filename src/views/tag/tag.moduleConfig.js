import Test from 'shared/test'

const tagConfig = {
	routeComponents: {
		tag: Test,
	},
	routes: [
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
	],
}

export default tagConfig

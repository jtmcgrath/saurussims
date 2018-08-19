const notFoundConfig = {
	defaultRoute: 'notFound',
	routeComponents: {
		notFound: () => null,
	},
	routes: [
		{
			name: 'notFound',
			path: '/404',
		},
	],
}

export default notFoundConfig

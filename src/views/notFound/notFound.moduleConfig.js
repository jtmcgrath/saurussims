import Test from 'shared/test'

const notFoundConfig = {
	defaultRoute: 'notFound',
	routeComponents: {
		notFound: Test,
	},
	routes: [
		{
			name: 'notFound',
			path: '/404',
		},
	],
}

export default notFoundConfig

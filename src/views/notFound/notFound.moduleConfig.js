import PrintProps from 'shared/printProps'

const notFoundConfig = {
	defaultRoute: 'notFound',
	routeComponents: {
		notFound: PrintProps,
	},
	routes: [
		{
			name: 'notFound',
			path: '/404',
		},
	],
}

export default notFoundConfig

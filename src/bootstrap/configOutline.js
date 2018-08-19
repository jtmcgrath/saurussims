export default {
	appComponent: {
		type: 'value',
		required: true,
	},
	defaultRoute: {
		type: 'value',
		required: true,
	},
	dependencies: {
		type: 'object',
	},
	routeComponents: {
		type: 'object',
		required: true,
	},
	routes: {
		type: 'array',
		required: true,
		preventDuplicates: x => y => x.name === y.name,
	},
}

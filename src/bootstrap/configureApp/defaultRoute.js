export default function addDefaultRoute(config, route) {
	if (typeof route !== 'string') {
		throw new Error(
			`Error trying to add default route: string expected, found ${typeof route} instead.`
		)
	}

	if (config.defaultRoute) {
		throw new Error(
			'Error trying to add default route: a default route has already been defined.'
		)
	}

	return route
}

export default function addRoutes(config, routes) {
	if (!Array.isArray(routes)) {
		throw new Error('Error trying to add routes: expected an array.')
	}

	return routes.reduce((all, route) => {
		if (all.some(r => r.name === route.name)) {
			throw new Error(
				`Error trying to add route '${
					route.name
				}': a route with this name already exists.`
			)
		}

		return [...all, route]
	}, config.routes)
}

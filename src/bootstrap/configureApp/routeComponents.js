import { isObject } from 'shared/utils'

export default function addRouteComponents(config, routeComponents) {
	if (!isObject(routeComponents)) {
		throw new Error(
			'Error trying to add route components: expected an object.'
		)
	}

	return Object.entries(routeComponents).reduce((all, [key, value]) => {
		if (all[key]) {
			throw new Error(
				`Error trying to add route component '${key}': a route component with this name already exists.`
			)
		}

		return { ...all, [key]: value }
	}, config.routeComponents)
}

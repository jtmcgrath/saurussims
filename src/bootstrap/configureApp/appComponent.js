export default function addAppComponent(config, component) {
	if (typeof component !== 'function') {
		throw new Error(
			`Error trying to add app component: component expected, found ${typeof component} instead.`
		)
	}

	if (config.appComponent) {
		throw new Error(
			'Error trying to add app component: an app component has already been defined.'
		)
	}

	return component
}

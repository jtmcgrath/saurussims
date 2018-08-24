import { isObject } from 'shared/utils'

export default function addDependencies(config, dependencies) {
	if (!isObject(dependencies)) {
		throw new Error('Error trying to add dependencies: expected an object.')
	}

	return Object.entries(dependencies).reduce((all, [key, value]) => {
		if (all[key]) {
			throw new Error(
				`Error trying to add dependency '${key}': a dependency with this name already exists.`
			)
		}

		return { ...all, [key]: value }
	}, config.dependencies)
}

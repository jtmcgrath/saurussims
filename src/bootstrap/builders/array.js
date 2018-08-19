const array = (name, settings = {}) => config => acc => {
	if (config[name]) {
		if (!Array.isArray(config[name])) {
			throw new Error(
				`Error trying to add ${name}: expected an array, found ${typeof config[
					name
				]}.`
			)
		}

		const values = config[name].reduce((all, value) => {
			if (
				settings.preventDuplicates &&
				all.some(settings.preventDuplicates(value))
			) {
				throw new Error(
					`Error trying to add ${name}:${JSON.stringify(
						value
					)}: duplicate value detected.`
				)
			}

			return [...all, value]
		}, acc[name] || [])

		return { ...acc, [name]: values }
	}

	return acc
}

export default array

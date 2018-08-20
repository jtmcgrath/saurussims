const value = ({ name }) => config => acc => {
	if (config[name]) {
		if (acc[name]) {
			throw new Error(
				`Error trying to add ${name}: duplicate value detected.`
			)
		}

		return { ...acc, [name]: config[name] }
	}

	return acc
}

export default value

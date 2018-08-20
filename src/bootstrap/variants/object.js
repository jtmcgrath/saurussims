import { isObject } from 'shared/utils'

const object = ({ name }) => config => acc => {
	if (config[name]) {
		if (!isObject(config[name])) {
			throw new Error(`Error trying to add ${name}: expected an object.`)
		}

		const values = Object.entries(config[name]).reduce(
			(all, [key, value]) => {
				if (all[key]) {
					throw new Error(
						`Error trying to add ${name}.${key}: duplicate key detected.`
					)
				}

				return { ...all, [key]: value }
			},
			acc[name] || {}
		)

		return { ...acc, [name]: values }
	}

	return acc
}

export default object

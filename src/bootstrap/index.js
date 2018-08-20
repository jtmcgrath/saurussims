import addConfig from './addConfig'
import configOutline from './configOutline'

const req = require.context('../', true, /\.moduleConfig\.js$/)
const configs = req.keys().map(req)

export default (initialConfig = {}) => {
	const { dependencies, ...finalConfig } = configs
		.map(moduleConfig => moduleConfig.default)
		.reduce(addConfig(configOutline), initialConfig)

	Object.entries(configOutline).forEach(([key, settings]) => {
		if (settings.required && !finalConfig[key]) {
			throw new Error(
				`Error building config: required field ${key} missing.`
			)
		}
	})

	const dependencyNames = Object.keys(dependencies)

	return Promise.all(
		dependencyNames.map(name => dependencies[name](finalConfig))
	).then(results => ({
		...finalConfig,
		dependencies: dependencyNames.reduce(
			(all, name, i) => ({
				...all,
				[name]: results[i],
			}),
			{}
		),
	}))
}

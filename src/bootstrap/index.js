import addConfig from './addConfig'
import { configSections } from './bootstrapConfig'

const req = require.context('../', true, /\.moduleConfig\.js$/)
const configs = req.keys().map(req)

export default (initialConfig = {}) => {
	const { dependencies, ...finalConfig } = configs
		.map(moduleConfig => moduleConfig.default)
		.reduce(addConfig, initialConfig)

	configSections.forEach(({ name, required }) => {
		if (required && !finalConfig[name]) {
			throw new Error(
				`Error building config: required field '${name}' missing.`
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

import { get } from 'shared/utils'

import * as callbacks from './configureApp'

const empty = {
	dependencies: {},
	routeComponents: {},
	routes: [],
}

const required = [
	'appComponent',
	'defaultRoute',
	'dependencies',
	'routeComponents',
	'routes',
]

export const createApp = (
	configCallbacks = {},
	emptyConfig = {},
	requiredKeys = []
) => initialConfig => {
	let config = {
		...emptyConfig,
		...initialConfig,
	}

	return {
		initialConfig,
		getConfig: () => {
			requiredKeys.forEach(key => {
				if (!get(config, key)) {
					throw new Error(
						`Error building app config: required key '${key}' not found.`
					)
				}
			})

			return config
		},
		addRequiredKey: (...configs) => requiredKeys.push(...configs),
		...Object.entries(configCallbacks).reduce(
			(acc, [key, callback]) => ({
				...acc,
				[callback.name]: value => {
					config = {
						...config,
						[key]: callback(config, value),
					}
				},
			}),
			{}
		),
	}
}

export default createApp(callbacks, empty, required)

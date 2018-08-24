import { get } from 'shared/utils'

import * as allCallbacks from './configureApp'

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

export default createApp(
	allCallbacks,
	{
		dependencies: {},
		routeComponents: {},
		routes: [],
	},
	[
		'appComponent',
		'defaultRoute',
		'dependencies',
		'routeComponents',
		'routes',
	]
)

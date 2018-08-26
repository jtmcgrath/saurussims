import { sortBy } from 'shared/utils'

const bootstrap = (createApp, configs, postProcess = []) => (
	initialConfig = {}
) => {
	const app = createApp(initialConfig)

	configs.forEach(configureApp => configureApp.default(app))

	return postProcess.length
		? postProcess
				.sort(sortBy('sortOrder'))
				.reduce(
					async (acc, processConfig) =>
						await processConfig.default(acc),
					app.getConfig()
				)
		: Promise.resolve(app.getConfig())
}

export default bootstrap

import { sortBy } from 'shared/utils'

const req = require.context('./', true, /\.postProcess\.js$/)
const process = req.keys().map(req)

const bootstrap = postProcess => (createApp, configs) => (
	initialConfig = {}
) => {
	const app = createApp(initialConfig)

	configs.forEach(configureApp => configureApp.default(app))

	return postProcess
		.sort(sortBy('sortOrder'))
		.reduce(
			async (acc, processConfig) => await processConfig.default(acc),
			app.getConfig()
		)
}

export default bootstrap(process)

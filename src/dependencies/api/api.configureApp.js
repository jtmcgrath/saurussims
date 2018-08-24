import { configureApi } from './api'

const apiConfig = app => {
	app.addDependencies({
		api: config => configureApi(config),
	})
	app.addRequiredKey('dependencies.api')
}

export default apiConfig

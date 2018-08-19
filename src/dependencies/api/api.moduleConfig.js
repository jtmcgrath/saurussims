import { configureApi } from './api'

const apiConfig = {
	dependencies: {
		api: config => configureApi(config),
	},
}

export default apiConfig

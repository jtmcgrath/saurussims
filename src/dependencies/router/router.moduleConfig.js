import { configureRouter } from './router'

const routerConfig = {
	dependencies: {
		router: config => configureRouter(config),
	},
}

export default routerConfig

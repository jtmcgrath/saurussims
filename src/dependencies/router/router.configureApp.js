import { configureRouter } from './router'

const routerConfig = app => {
	app.addDependencies({
		router: config => configureRouter(config)
	})
	app.addRequiredKey('dependencies.router')
}

export default routerConfig

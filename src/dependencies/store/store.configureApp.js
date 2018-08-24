import { configureStore } from './store'

const storeConfig = app => {
	app.addDependencies({
		store: config => configureStore(config),
	})
	app.addRequiredKey('dependencies.store')
}

export default storeConfig

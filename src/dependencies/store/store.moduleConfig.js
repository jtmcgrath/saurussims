import { configureStore } from './store'

const storeConfig = {
	dependencies: {
		store: config => configureStore(config),
	},
}

export default storeConfig

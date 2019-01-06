import createApi from './api'
import createStore from './store'
import getApp from './app'

export default function createConfig(root, variables) {
	const app = getApp(root, variables)

	if (!app) {
		return false
	}

	const api = createApi(app, variables)
	const store = createStore(app)

	return {
		app,
		api,
		store,
	}
}

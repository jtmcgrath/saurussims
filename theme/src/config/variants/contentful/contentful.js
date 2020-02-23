import createApi from './api'
import createStore from './store'

export default function createConfig(app, variables) {
	const api = createApi(app, variables)
	const store = createStore(app)

	return {
		app,
		api,
		store,
	}
}

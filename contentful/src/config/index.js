import createApi from './api'
// import getApp from './app'
const getApp = () => 'app'

export default function createConfig(root, variables) {
	const app = getApp(root, variables)

	if (!app) {
		return false
	}

	const api = createApi(app, variables)

	return {
		app,
		api,
	}
}

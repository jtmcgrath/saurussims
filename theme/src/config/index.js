import getApp from './app'
import * as variants from './variants'

export default function createConfig(root, variables) {
	const app = getApp(root, variables)

	if (!app) {
		return false
	}

	return variants[app.dataSource](app, variables)
}

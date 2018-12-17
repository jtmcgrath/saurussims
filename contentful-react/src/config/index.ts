import { createApi, Api } from './api'
import { getApp } from './app'

export type Root = Element | null
export type Variables = {
	accessToken: string
	contentTypes: string[]
	entryPoints: { app: string; className: string }[]
	spaceId: string
}

export interface Config {
	api: Api
	app: string
}

export default async function createConfig(root: Root, variables: Variables) {
	const app = getApp(root, variables)

	if (!app) {
		return false
	}

	const api = createApi(app, variables)

	const config: Config = {
		app,
		api,
	}

	return config
}

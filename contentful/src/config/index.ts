import { getApp } from './app'

export type Root = Element | null
export type Variables = {
	accessToken: string
	contentTypes: string[]
	entryPoints: { app: string; className: string }[]
	spaceId: string
}

export interface Config {
	app: string
}

export default async function createConfig(root: Root, variables: Variables) {
	const app = getApp(root, variables)

	if (!app) {
		return false
	}

	const config: Config = {
		app,
	}

	return config
}

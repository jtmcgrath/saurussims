export type Root = Element | null
export type Variables = {
	accessToken: string
	contentTypes: string[]
	entryPoints: { app: string; className: string }[]
	spaceId: string
}

export interface Config {}

export default async function createConfig(root: Root, variables: Variables) {
	if (!root) {
		return false
	}

	const config: Config = {}

	return config
}

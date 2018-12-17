import { Root, Variables } from './index'

export function getApp(root: Root, variables: Variables) {
	if (!root) {
		return false
	}

	const entryPoint = variables.entryPoints.find(({ className }) =>
		root.classList.contains(className)
	)

	return entryPoint && entryPoint.app
}

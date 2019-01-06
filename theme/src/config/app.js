export default function getApp(root, variables) {
	return (
		root &&
		variables.entryPoints.find(({ className }) =>
			root.classList.contains(className)
		)
	)
}

export default function getApp(root, variables) {
	if (!root) return

	const app = variables.entryPoints.find(({ className }) =>
		root.classList.contains(className)
	)

	if (!app || !app.filters) return app

	app.paths = {}

	const index = parent => (filter, i) => {
		const current = [...parent, i]

		if (filter.tags) {
			const path = current.join('.')
			filter.tags.forEach(tag => {
				app.paths[tag] = path
			})
		}

		if (filter.filters) {
			filter.filters.forEach(index(current))
		}
	}

	app.filters.forEach(index([]))

	return app
}

const bootstrap = (createApp, configs) => (initialConfig = {}) => {
	const app = createApp(initialConfig)

	configs.forEach(configureApp => configureApp.default(app))

	const { dependencies, ...finalConfig } = app.getConfig()

    const dependencyNames = Object.keys(dependencies)

	return Promise.all(
		dependencyNames.map(name => dependencies[name](finalConfig))
	).then(results => ({
		...finalConfig,
		dependencies: dependencyNames.reduce(
			(all, name, i) => ({
				...all,
				[name]: results[i],
			}),
			{}
        ),
	}))
}

export default bootstrap

export default function postProcessDependencies({ dependencies, ...config }) {
	const dependencyNames = Object.keys(dependencies)

	return Promise.all(
		dependencyNames.map(name => dependencies[name](config))
	).then(results => ({
		...config,
		dependencies: dependencyNames.reduce(
			(all, name, i) => ({
				...all,
				[name]: results[i],
			}),
			{}
		),
	}))
}

export const sortOrder = 0

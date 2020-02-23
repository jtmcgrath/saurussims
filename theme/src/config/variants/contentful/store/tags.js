const createState = target => [
	0,
	target.filters.map(filter => (filter.filters ? createState(filter) : null)),
]

const createStateSetter = state => changePath => {
	let target = state

	changePath.split('.').forEach(value => {
		target[0] = parseInt(value, 10)
		target = target[1][value]
	})
}

const getPath = (parent, current) =>
	parent ? `${parent}.${current}` : `${current}`

const getState = ({ filters, greedy, tags = [], retired } = {}, state, parent) => {
	if (!state) {
		return {
			paths: [parent],
			tags: tags,
			retired,
		}
	}

	const key = state[0]

	const child = greedy
		? filters.reduce(
				(acc, filter, i) => {
					const subState = getState(
						filter,
						state[1][i],
						getPath(parent, i)
					)

					return {
						paths: [...acc.paths, ...subState.paths],
						tags: [...acc.tags, ...subState.tags],
					}
				},
				{ paths: [], tags: [] }
		  )
		: getState(filters[key], state[1][key], getPath(parent, key))

	return {
		paths: parent ? [parent, ...child.paths] : child.paths,
		tags: tags ? [...tags, ...child.tags] : child.tags,
		retired: child.retired || retired
	}
}

export default function createTagStore(app) {
	const state = createState(app)
	const get = () => getState(app, state)
	const set = createStateSetter(state)

	return {
		get,
		set,
	}
}

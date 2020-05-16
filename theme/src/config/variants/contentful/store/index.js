import createGeneralStore from './general'
import createTagsStore from './tags'

const forceValue = value => {
	switch (value) {
		case 'true':
			return true
		case 'false':
			return false
		default:
			return value
	}
}


const parseValue = (key, value) => {
	switch (key) {
		case 'tags':
			return value.split(',')

		case 'page':
			return parseInt(value, 10)

		default:
			return value
	}
}

const reduceQuery = (acc, cur) => {
	const [key, value] = cur.split('=')
	acc[key] = parseValue(key, value)
	return acc;
}

export default function createStore(app) {
	const general = createGeneralStore(app)
	const tags = createTagsStore(app)

	const setState = (type, value) => {
		if (type === 'tags') {
			tags.set(value)
			general.set('page', 1)
		} else {
			general.set(type, forceValue(value))
		}
	}

	const getState = () => ({
		...general.get(),
		...tags.get(),
	})

	const setQuery = string => {
		const query = string.substr(1).split('&').reduce(reduceQuery, {})

		for (const type in query) {
			switch (type) {
				case 'tags':
					query.tags.forEach(tag => tags.set(app.paths[tag]))
					break

				default:
					general.set(type, forceValue(query[type]))
			}
		}
	}

	const getQuery = () => {
		const query = []
		const {paths, ...state} = getState()

		for (const key in state) {
			const value = state[key]

			if (!value) continue

			switch (typeof value) {
				case 'number':
					query.push(`${key}=${value}`)
					continue;

				case 'object':
					if (value.length) {
						query.push(`${key}=${value.join(',')}`)
					}
					continue;

				default:
					if (value.length) {
						query.push(`${key}=${value}`)
					}
			}
		}

		return query.join('&')
	}

	setQuery(window.location.search)

	return {
		setQuery,
		getQuery,
		set: setState,
		get: getState,
	}
}

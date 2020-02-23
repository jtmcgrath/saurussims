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

export default function createStore(app) {
	const general = createGeneralStore(app)
	const tags = createTagsStore(app)

	return {
		set: (type, value) => {
			if (type === 'tags') {
				tags.set(value)
				general.set('page', 1)
			} else {
				general.set(type, forceValue(value))
			}
		},
		get: () => ({
			...general.get(),
			...tags.get(),
		}),
	}
}

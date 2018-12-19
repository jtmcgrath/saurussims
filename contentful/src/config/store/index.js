import createGeneralStore from './general'

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

	return {
		set: (type, value) => {
			general.set(type, forceValue(value))
		},
		get: () => ({
			...general.get(),
		}),
	}
}

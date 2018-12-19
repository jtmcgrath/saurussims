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
	return {
		set: (type, value) => {
		},
		get: () => ({
		}),
	}
}

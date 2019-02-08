export default function createGeneralStore(app) {
	const state = {
		download: false,
		imgur: false,
		page: 1,
	}

	return {
		get: () => state,
		set: (key, value) => {
			state[key] = value
		},
	}
}

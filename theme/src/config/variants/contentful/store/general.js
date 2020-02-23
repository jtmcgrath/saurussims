export default function createGeneralStore({ toggles = [] }) {
	const state = toggles.reduce(
		(acc, toggle) => {
			acc[toggle] = false
			return acc
		},
		{
			page: 1,
		}
	)

	return {
		get: () => state,
		set: (key, value) => {
			state[key] = value
		},
	}
}

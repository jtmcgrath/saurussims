export const get = (obj, ...paths) => {
	let value = obj
	for (let key of paths) {
		if (!value) {
			break
		}
		value = value[key]
	}
	return value
}

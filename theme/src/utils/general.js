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

export const toQueryString = arr =>
	arr.filter(Boolean).reduce((str, item) => {
		if (!Array.isArray(item)) {
			throw new Error(
				`toQueryString: each item should be a [key:value] pair array, found ${typeof item} instead.`
			)
		}
		const [key, val] = item
		return `${str}&${key}=${val}`
	}, '')

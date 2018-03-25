export const compose = (...args) => first =>
	args.reverse().reduce((prev, func) => func(prev), first)

const getKey = (obj, keys) =>
	obj && keys.length ? getKey(obj[keys[0]], keys.slice(1)) : obj

export const get = (obj, path) =>
	obj === undefined || obj === null ? undefined : getKey(obj, path.split('.'))

export const capitalize = string =>
	string.charAt(0).toUpperCase() + string.slice(1)

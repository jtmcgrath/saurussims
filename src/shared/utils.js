export const compose = (...args) => first =>
	args.reduceRight((prev, func) => func(prev), first)

export const isObject = obj =>
	typeof obj === 'object' && obj !== null && !Array.isArray(obj)

export const getRootNode = route => route.split('.')[0]

const getKey = (obj, keys) =>
	obj && keys.length ? getKey(obj[keys[0]], keys.slice(1)) : obj

export const get = (obj, path) =>
	obj === undefined || obj === null ? undefined : getKey(obj, path.split('.'))

export const keep = (...keys) => obj =>
	Object.entries(obj)
		.filter(([key]) => keys.includes(key))
		.reduce((acc, [key, val]) => Object.assign(acc, { [key]: val }), {})

export const sortBy = (prop, dir = 'asc') => (
	{ [prop]: x = 0 },
	{ [prop]: y = 0 }
) => (dir === 'asc' ? x - y : y - x)

const spreadStyles = type => (...args) => `
	${type}-top: ${args[0]};
	${type}-right: ${args[1] || args[0]};
	${type}-bottom: ${args[2] || args[0]};
	${type}-left: ${args[3] || args[1] || args[0]};
`

export const margin = spreadStyles('margin')
export const padding = spreadStyles('padding')

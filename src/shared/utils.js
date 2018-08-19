export const compose = (...args) => first =>
	args.reduceRight((prev, func) => func(prev), first)

export const isObject = obj =>
	typeof obj === 'object' && obj !== null && !Array.isArray(obj)

export const getRootNode = route => route.split('.')[0]

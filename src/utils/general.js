export const compose = (...args) => first =>
	args.reverse().reduce((prev, func) => func(prev), first)

export const createQuery = obj =>
	Object.entries(obj).reduce(
		(str, [key, val], i) =>
			key && val ? `${str}${i > 0 ? '&' : ''}${key}=${val}` : str,
		'?'
	)

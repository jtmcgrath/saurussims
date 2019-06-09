export const getClosestTarget = element =>
	element &&
	(element.tagName === 'A'
		? element
		: getClosestTarget(element.parentElement))

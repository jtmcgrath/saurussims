export const generateList = (start, end) => {
	const low = start < end ? start : end
	const high = start < end ? end : start
	return Array.from(Array(Math.abs(high - low) + 1), (e, i) => i + low)
}

export const generateListAroundCenter = (origin, max) => {
	const center = parseInt(origin, 10)
	const pages = [center]

	for (let i = 1; pages.length < 9; i++) {
		if (center + i <= max) pages.push(center + i)

		if (center - i > 0) pages.unshift(center - i)

		if (pages.length >= 9 || i >= 9) return pages
	}

	return pages
}

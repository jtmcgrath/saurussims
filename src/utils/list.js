export const generateList = (start, end) => {
	const low = start < end ? start : end
	const high = start < end ? end : start
	return Array.from(Array(Math.abs(high - low) + 1), (e, i) => i + low)
}

export const generateListAroundCenter = (current, total, maxLength) => {
	const center = parseInt(current, 10)
	const pages = [center]

	for (let i = 1; pages.length < maxLength; i++) {
		if (center + i <= total) pages.push(center + i)

		if (center - i > 0) pages.unshift(center - i)

		if (pages.length >= maxLength || i >= maxLength) return pages
	}

	return pages
}

const timeouts = {}

const timeoutExists = key => {
	if (timeouts[key]) return true

	timeouts[key] = true

	setTimeout(() => {
		timeouts[key] = false
	}, 5 * 60 * 1000)

	return false
}

export default timeoutExists

// https://gist.github.com/james2doyle/5694700

// easing functions http://goo.gl/5HLl8
Math.easeInOutQuad = (t, b, c, d) => {
	t /= d / 2
	if (t < 1) {
		return c / 2 * t * t + b
	}
	t--
	return -c / 2 * (t * (t - 2) - 1) + b
}

const requestFrame = (() =>
	window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	function(callback) {
		window.setTimeout(callback, 1000 / 60)
	})()

const scrollTo = (to = 0, duration = 500) => {
	// because it's so fucking difficult to detect the scrolling element, just move them all
	const move = amount => {
		document.documentElement.scrollTop = amount
		document.body.parentNode.scrollTop = amount
		document.body.scrollTop = amount
	}

	const position = () =>
		document.documentElement.scrollTop ||
		document.body.parentNode.scrollTop ||
		document.body.scrollTop

	const start = position()
	let change = to - start
	let currentTime = 0
	let increment = 20
	let origin = start

	const animateScroll = function() {
		currentTime += increment
		const scrollHeight = document.body.scrollHeight

		if (start > scrollHeight && origin !== scrollHeight) {
			origin = scrollHeight
			change = to - scrollHeight
		}

		move(Math.easeInOutQuad(currentTime, origin, change, duration))

		if (currentTime < duration) {
			requestFrame(animateScroll)
		}
	}

	animateScroll()
}

export default scrollTo

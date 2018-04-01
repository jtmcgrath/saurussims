const likeFrame = postId => `
<html>
<body>
<script type="text/javascript">
const postMessage = message => {
	window.parent.postMessage(JSON.parse(JSON.stringify(message)), '*')
}

const init = () => {
	window.addEventListener('message', postMessage, false)

	const isLoggedIn = document.cookie.indexOf('logged_in') !== -1

	${process.env.NODE_ENV !== 'development' ? 'if (!isLoggedIn) return' : ''}

	const postId = '${postId}'

	const setup = liked => {
		const message = \`tumblelog_like;\${postId};\${liked ? 'liked' : 'unliked'}\`
		postMessage(message)
	}

	const receiveMessage = (message, origin) => {
		if (message[0] !== 'state_update') return

		const data = JSON.parse(message[1])

		if (typeof data !== 'object') return

		if (data.length) {
			data.forEach(body => {
				if (body.post_id === postId) {
					setup(Boolean(body.state))
				}
			})
		} else {
			setup(Boolean(data.state))
		}
	}
}

init()
</script>
</body>
</html>
`

const createLikeFrame = (iframe, postId) =>
	new Promise(resolve => {
		const doc = iframe.contentWindow.document
		doc.open()
		doc.write(likeFrame(postId))
		doc.close()
		resolve()
	})

export default createLikeFrame

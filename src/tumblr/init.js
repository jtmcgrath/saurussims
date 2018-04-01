export default () => {
	console.log('initiating tumblr logging')

	const receiveData = ({ data }) => {
		if (!data || typeof data !== 'string') return

		const isObject = data.charAt(0) === '{'
		const parsed = isObject ? JSON.parse(data) : data.split(';')
		const method = isObject ? parsed.method : parsed[0]
		const args = isObject ? parsed.args : parsed[1]

		console.log(method, args)
	}

	window.addEventListener('message', receiveData, false)
}

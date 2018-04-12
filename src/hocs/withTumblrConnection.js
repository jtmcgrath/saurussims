import { connect } from 'react-redux'

import { compose } from 'utils/general'
import { withLifecycle } from 'hocs'
import { receiveUserStatus } from 'store'
import { loadLikes } from 'tumblr'

const withTumblrConnection = BaseComponent =>
	compose(
		connect(null, { receiveUserStatus }),
		withLifecycle({
			willMount: ({ receiveUserStatus: dispatchUserStatus }) => {
				window.addEventListener('message', ({ data }) => {
					if (!data || typeof data !== 'string') return

					const isObject = data.charAt(0) === '{'
					const parsed = isObject ? JSON.parse(data) : data.split(';')
					const method = isObject ? parsed.method : parsed[0]
					const args = isObject ? parsed.args : parsed[1]

					if (method === 'user_logged_in') {
						dispatchUserStatus(args === 'Yes')
					}

					if (method === 'like_iframe_load') {
						loadLikes()
					}
				})
			},
		}),
	)(BaseComponent)

export default withTumblrConnection

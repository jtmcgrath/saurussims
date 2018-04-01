import { connect } from 'react-redux'

import { compose } from 'utils/general'
import { withLifecycle } from 'hocs'
import { receiveUserStatus, receiveLikeStates } from 'store'

const withTumblrConnection = BaseComponent =>
	compose(
		connect(null, { receiveUserStatus, receiveLikeStates }),
		withLifecycle({
			willMount: ({
				receiveUserStatus: dispatchUserStatus,
				receiveLikeStates: dispatchLikeStates,
			}) => {
				window.addEventListener('message', ({ data }) => {
					if (!data || typeof data !== 'string') return

					const isObject = data.charAt(0) === '{'
					const parsed = isObject ? JSON.parse(data) : data.split(';')
					const method = isObject ? parsed.method : parsed[0]
					const args = isObject ? parsed.args : parsed[1]

					if (method === 'user_logged_in') {
						dispatchUserStatus(args === 'Yes')
					}

					if (method === 'tumblr-like-requests:likeButton:updateLikeStates') {
						dispatchLikeStates(args[0])
					}
				})
			},
		}),
	)(BaseComponent)

export default withTumblrConnection

import { RECEIVE_DOWNLOADS } from './actionTypes'

const reducer = (state = null, action) => {
	switch (action.type) {
		case RECEIVE_DOWNLOADS: {
			return action.downloads
		}

		default: {
			return state
		}
	}
}

export default reducer

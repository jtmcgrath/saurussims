import config from 'config'
import { RECEIVE_DOWNLOADS } from './actionTypes'

const initialState = config.CONTENTFUL.content_types.reduce(
	(acc, cat) => ({
		...acc,
		[cat]: null,
	}),
	{},
)

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_DOWNLOADS: {
			return {
				...state,
				[action.contentType]: action.downloads,
			}
		}

		default: {
			return state
		}
	}
}

export default reducer

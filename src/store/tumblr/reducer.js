import {
	RECEIVE_LIKE_STATES,
	RECEIVE_POSTS,
	RECEIVE_PAGE,
	RECEIVE_USER_STATUS,
} from './actionTypes'

const initialState = {
	likes: {},
	posts: {},
	pages: {},
	pageCounts: {},
	userLoggedIn: false,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_LIKE_STATES: {
			return {
				...state,
				likes: action.states.reduce(
					(acc, curr) => ({
						...acc,
						[curr.post_id]: curr.state,
					}),
					state.likes,
				),
			}
		}

		case RECEIVE_POSTS: {
			return {
				...state,
				posts: {
					...state.posts,
					...action.posts,
				},
			}
		}

		case RECEIVE_PAGE: {
			return {
				...state,
				pages: {
					...state.pages,
					[`${action.tag}${action.page}`]: action.posts,
				},
				pageCounts: {
					...state.pageCounts,
					[action.tag || 'all']: action.pageCount,
				},
			}
		}

		case RECEIVE_USER_STATUS: {
			return {
				...state,
				userLoggedIn: action.status,
			}
		}

		default: {
			return state
		}
	}
}

export default reducer

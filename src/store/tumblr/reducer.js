import { RECEIVE_POSTS, RECEIVE_PAGE } from './actionTypes'

const initialState = {
	posts: {},
	pages: {},
	pageCounts: {},
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
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

		default: {
			return state
		}
	}
}

export default reducer

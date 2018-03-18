import { RESIZE_VIEWPORT } from './actionTypes'

const getClientWidth = () => document.getElementById('root').clientWidth

const getColumnCount = (
	spacing = window.config.columnSpacing,
	width = window.config.columnWidth,
) => Math.floor(getClientWidth() / (width + spacing)) || 1

const initialState = {
	columnCount: getColumnCount(),
	columnSpacing: window.config.columnSpacing,
	columnWidth: window.config.columnWidth,
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case RESIZE_VIEWPORT: {
			return {
				...state,
				columnCount: getColumnCount(state.columnSpacing, state.columnWidth),
			}
		}

		default: {
			return state
		}
	}
}

export default reducer

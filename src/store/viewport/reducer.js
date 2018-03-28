import { RESIZE_VIEWPORT } from './actionTypes'

const getClientWidth = () => document.getElementById('root').clientWidth

const getColumnCount = (
	spacing = window.config.columnSpacing,
	width = window.config.columnWidth,
	maxColumns = window.config.maxColumns,
) => {
	const count = Math.floor(getClientWidth() / (width + spacing)) || 1
	return count > maxColumns ? maxColumns : count
}

const initialState = getColumnCount()

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case RESIZE_VIEWPORT: {
			return getColumnCount()
		}

		default: {
			return state
		}
	}
}

export default reducer

import { RESIZE_VIEWPORT } from './actionTypes'

let debounceTimer

export const resizeViewport = () => dispatch => {
	clearTimeout(debounceTimer)
	debounceTimer = setTimeout(
		() =>
			dispatch({
				type: RESIZE_VIEWPORT,
			}),
		200,
	)
}

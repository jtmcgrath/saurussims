import { RECEIVE_DOWNLOADS } from './actionTypes'

export const receiveDownloads = (contentType, downloads) => ({
	type: RECEIVE_DOWNLOADS,
	contentType,
	downloads,
})

import { RECEIVE_DOWNLOADS } from './actionTypes'

export const receiveDownloads = downloads => ({
	type: RECEIVE_DOWNLOADS,
	downloads,
})

import api from 'api'
import timeoutExists from 'utils/timeouts'

import { receiveDownloads } from './actions'
import { REQUEST_DOWNLOADS } from './actionTypes'
import { transformAssets, transformDownloads } from './transformers'

export const requestDownloads = contentType => dispatch => {
	if (timeoutExists(`downloads/${contentType}`)) return

	dispatch({ type: REQUEST_DOWNLOADS })

	api.contentful
		.getEntries(contentType)
		.then(({ includes: { Asset: _assets }, items: _downloads }) => {
			const assets = transformAssets(_assets)
			const downloads = transformDownloads(contentType, _downloads, assets)

			dispatch(receiveDownloads(contentType, downloads))
		})
}

import api from 'api'
import timeoutExists from 'utils/timeouts'

import { receiveDownloads } from './actions'
import { REQUEST_DOWNLOADS } from './actionTypes'
import { transformAssets, transformDownloads } from './transformers'

export const requestDownloads = () => dispatch => {
	if (timeoutExists('downloads')) return

	dispatch({ type: REQUEST_DOWNLOADS })

	api.contentful
		.getEntries('download')
		.then(({ includes: { Asset: _assets }, items: _downloads }) => {
			const assets = transformAssets(_assets)
			const downloads = transformDownloads(_downloads, assets)

			dispatch(receiveDownloads(downloads))
		})
}

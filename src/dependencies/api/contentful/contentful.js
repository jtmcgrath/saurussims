import { map } from 'rxjs/operators'

// import { receiveDownloads } from 'dependencies/store'
import { toDispatch } from 'shared/effects'

import { createQuery, createTransformers, fromUrl } from '../utils'

import * as sourceTransformers from './transformers'

const receiveDownloads = (...args) => args

export default function createContentfulApi({ contentful }) {
	const transformers = createTransformers(sourceTransformers, contentful)

	const getUrl = (path, query = {}) =>
		`https://cdn.contentful.com/spaces/${
			contentful.space_id
		}/${path}${createQuery({
			access_token: contentful.access_token,
			...query,
		})}`

	const orderedTypes = ['download']

	const getQuery = content_type =>
		orderedTypes.includes(content_type)
			? { content_type, order: '-fields.order' }
			: { content_type }

	return {
		getEntries: contentType =>
			fromUrl(getUrl('entries', getQuery(contentType))).pipe(
				map(({ includes: { Asset }, items }) =>
					transformers.transformDownloads(
						contentType,
						items,
						transformers.transformAssets(Asset)
					)
				),
				map(downloads => receiveDownloads(contentType, downloads)),
				map(toDispatch)
			),
	}
}

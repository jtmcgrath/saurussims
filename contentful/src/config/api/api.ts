import { Observable } from 'rxjs'
import { ajax } from 'rxjs/ajax'
import { map } from 'rxjs/operators'

import { Variables } from '../index'
import transform from './transform'

export interface DownloadData {
	title: string
	link: string
	image: string
}

export interface SimData {
	download?: string
	image: string
	name: string
	tagName: string
}

export type Item = DownloadData | SimData

type Event = {
	items: Array<Item>
}

export type Api = { fetch: () => Observable<Event> }

const getUrl = (app: string, variables: Variables, query = {}) =>
	`https://cdn.contentful.com/spaces/${
		variables.spaceId
	}/entries?access_token=${
		variables.accessToken
	}&content_type=${app}${Object.entries(query).reduce(
		(str, [key, val]) => `${str}&${key}=${val}`,
		''
	)}`

const itemsPerPage = 24

export function createApi(app: string, variables: Variables) {
	const transformer = transform(app)

	const api: Api = {
		fetch: (page = 0) =>
			ajax(
				getUrl(app, variables, {
					...(app === 'download' ? { order: '-fields.order' } : {}),
					limit: itemsPerPage,
					skip: page * itemsPerPage,
				})
			).pipe(map(transformer)),
	}

	return api
}

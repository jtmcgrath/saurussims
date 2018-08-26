import { fromPromise } from 'rxjs/observable/fromPromise'

export const createQuery = obj =>
	Object.entries(obj).reduce(
		(str, [key, val], i) =>
			key && val ? `${str}${i > 0 ? '&' : ''}${key}=${val}` : str,
		'?'
	)

export const fromUrl = url =>
	fromPromise(fetch(url).then(response => response.json()))

export const trackRequests = () => {
	const lastFetched = {}

	return {
		checkRequest: (endpoint, ...args) =>
			lastFetched[endpoint] && lastFetched[endpoint][args.toString()],
		logRequest: (endpoint, ...args) => {
			if (!lastFetched[endpoint]) {
				lastFetched[endpoint] = {}
			}
			lastFetched[endpoint][args.toString()] = Date.now()
		},
	}
}

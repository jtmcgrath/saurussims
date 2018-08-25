import { forkJoin, Observable } from 'rxjs'

export const configureImageCache = () => {
	const cache = {}

	const loadImage = path =>
		Observable.create(observer => {
			if (cache[path]) {
				observer.next(cache[path])
				observer.complete()
			} else {
				cache[path] = new Image()
				cache[path].src = path
				cache[path].onload = () => {
					observer.next(cache[path])
					observer.complete()
				}
				cache[path].error = () => {
					observer.complete()
				}
			}
		})

	return {
		loadImage,

		loadImages: images => forkJoin(images.map(loadImage)),
	}
}

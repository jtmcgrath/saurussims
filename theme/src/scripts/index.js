import createGallery from './gallery'
import createMasonry from './masonry'
import createPhotosets from './photosets'

document.addEventListener(
	'DOMContentLoaded',
	() => {
		createGallery()
		createMasonry()
		createPhotosets()
	},
	false
)

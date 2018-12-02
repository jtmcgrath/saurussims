import { renderString } from '~/tumblr/helpers'

type PhotoSizes = '100' | '250' | '400' | '500' | 'HighRes' | 'Panorama'

export default {
	Alt: renderString('PhotoAlt'),
	Height: renderString<{ width: PhotoSizes }>(
		'PhotoHeight',
		({ width }) => `PhotoHeight-${width}`
	),
	SquareURL: renderString('PhotoURL-75sq'),
	URL: renderString<{ width: PhotoSizes }>(
		'PhotoURL',
		({ width }) => `PhotoURL-${width}`
	),
	Width: renderString<{ width: PhotoSizes }>(
		'PhotoWidth',
		({ width }) => `PhotoWidth-${width}`
	),
}

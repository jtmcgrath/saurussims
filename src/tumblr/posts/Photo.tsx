import { renderBlock, renderString } from '~/tumblr/helpers'

export const IfAperture = renderBlock('Aperture')
export const IfCamera = renderBlock('Camera')
export const IfCaption = renderBlock('Caption')
export const IfExif = renderBlock('Exif')
export const IfExposure = renderBlock('Exposure')
export const IfFocalLength = renderBlock('FocalLength')
export const IfHighRes = renderBlock('HighRes')
export const IfLinkUrl = renderBlock('LinkUrl')

export const Aperture = renderString('Aperture')
export const Camera = renderString('Camera')
export const Caption = renderString('Caption')
export const Exposure = renderString('Exposure')
export const FocalLength = renderString('FocalLength')
export const Link = {
	CloseTag: renderString('LinkCloseTag'),
	OpenTag: renderString('LinkOpenTag'),
	URL: renderString('LinkURL'),
}

type PhotoSizes = '100' | '250' | '400' | '500' | 'HighRes' | 'Panorama'
export const Photo = {
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

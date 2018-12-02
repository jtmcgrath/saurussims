import { renderBlock, renderString } from '~/tumblr/helpers'

export const IfCaption = renderBlock('Caption')
export const IfPhotos = renderBlock('Photos')

export const Caption = renderString('Caption')
export const PhotoCount = renderString('PhotoCount')
export const PhotosetLayout = renderString('PhotosetLayout')
export const JSPhotosetLayout = renderString('JSPhotosetLayout')

export { default as Photoset } from './Photoset'

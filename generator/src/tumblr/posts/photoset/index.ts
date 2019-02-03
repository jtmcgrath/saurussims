import { renderBlock, renderString } from '~/tumblr/helpers'

export const IfCaption = renderBlock('Caption')
export const IfPhotos = renderBlock('Photos')

export const Caption = renderString('Caption')
export const PhotoCount = renderString('PhotoCount')

export { default as Photoset } from './Photoset'
export { default as PhotosetLayout } from './PhotosetLayout'

import { renderBlock, renderString } from '~/tumblr/helpers'

export const IfCaption = renderBlock('Caption')
export const IfVideoThumbnail = renderBlock('VideoThumbnail')
export const IfVideoThumbnails = renderBlock('VideoThumbnails')

export const Caption = renderString('Caption')
export const FormattedPlayCount = renderString('FormattedPlayCount')
export const PlayCount = renderString('PlayCount')
export const PlayCountWithLabel = renderString('PlayCountWithLabel')
export const VideoThumbnail = renderString('VideoThumbnailURL')

export { default as Video } from './Video'
export { default as VideoEmbed } from './VideoEmbed'

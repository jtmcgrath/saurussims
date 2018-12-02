import { renderBlock, renderString } from '~/tumblr/helpers'

export const Answer = renderBlock('Answer')
export const Audio = renderBlock('Audio')
export const Chat = renderBlock('Chat')
export const Even = renderBlock('Even')
export const Link = renderBlock('Link')
export const More = renderBlock('More')
export const Odd = renderBlock('Odd')
export const Panorama = renderBlock('Panorama')
export const Photo = renderBlock('Photo')
export const Photoset = renderBlock('Photoset')
export const Quote = renderBlock('Quote')
export const Text = renderBlock('Text')
export const Video = renderBlock('Video')

export const EmbedURL = renderString('EmbedURL')
export const Permalink = renderString('Permalink')
export const PostID = renderString('PostID')
export const PostNotesURL = renderString('PostNotesURL')
export const PostType = renderString('PostType')
export const ShortURL = renderString('ShortURL')
export const TagsAsClasses = renderString('TagsAsClasses')

export { default as Post } from './Post'
export { default as Posts } from './Posts'

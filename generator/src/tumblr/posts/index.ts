import { renderBlock, renderString } from '~/tumblr/helpers'

import * as Answer from './answer'
import * as Audio from './audio'
import * as Chat from './chat'
import * as Dates from './dates'
import * as Link from './link'
import * as Notes from './notes'
import * as Panorama from './panorama'
import * as Photo from './photo'
import * as Photoset from './photoset'
import * as Quote from './quote'
import * as Sources from './sources'
import * as Submissions from './submissions'
import * as Tags from './tags'
import * as Text from './text'
import * as Video from './video'

export {
	Answer,
	Audio,
	Chat,
	Dates,
	Link,
	Notes,
	Panorama,
	Photo,
	Photoset,
	Quote,
	Sources,
	Submissions,
	Tags,
	Text,
	Video,
}

export const IfAnswer = renderBlock('Answer')
export const IfAudio = renderBlock('Audio')
export const IfChat = renderBlock('Chat')
export const IfEven = renderBlock('Even')
export const IfLink = renderBlock('Link')
export const IfMore = renderBlock('More')
export const IfOdd = renderBlock('Odd')
export const IfPanorama = renderBlock('Panorama')
export const IfPhoto = renderBlock('Photo')
export const IfPhotoset = renderBlock('Photoset')
export const IfQuote = renderBlock('Quote')
export const IfText = renderBlock('Text')
export const IfVideo = renderBlock('Video')

export const EmbedURL = renderString('EmbedURL')
export const Permalink = renderString('Permalink')
export const PostID = renderString('PostID')
export const PostNotesURL = renderString('PostNotesURL')
export const PostType = renderString('PostType')
export const ShortURL = renderString('ShortURL')
export const TagsAsClasses = renderString('TagsAsClasses')

export { default as IfPost } from './IfPost'
export { default as IfPosts } from './IfPosts'
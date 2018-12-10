import { renderBlock, renderString } from '~/tumblr/helpers'

export const IfAuthor = renderBlock('Author')
export const IfDescription = renderBlock('Description')
export const IfExcerpt = renderBlock('Excerpt')
export const IfHost = renderBlock('Host')

export const Author = renderString('Author')
export const Description = renderString('Description')
export const Excerpt = renderString('Excerpt')
export const Host = renderString('Host')
export const Name = renderString('Name')
export const Target = renderString('Target')
export const Thumbnail = renderString<{ highRes: boolean }>(
	'Thumbnail',
	({ highRes }) => (highRes ? '{Thumbnail-HighRes}' : '{Thumbnail}')
)
export const URL = renderString('URL')

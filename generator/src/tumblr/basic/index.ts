import { renderBlock, renderString } from '~/tumblr/helpers'

export const Hidden = renderBlock('Hidden')
export const IfDescription = renderBlock('Description')
export const IfHomePage = renderBlock('HomePage')
export const IfIndexPage = renderBlock('IndexPage')
export const IfPermalinkPage = renderBlock('PermalinkPage')
export const IfPostSummary = renderBlock('PostSummary')
export const IfPostTitle = renderBlock('PostTitle')
export const IfTagPage = renderBlock('TagPage')

export const BlogURL = renderString('BlogURL')
export const CopyrightYears = renderString('CopyrightYears')
export const CustomCSS = renderString('CustomCSS')
export const Description = renderString('Description')
export const FaviconURL = renderString('FaviconURL', () => '{Favicon}')
export const MetaDescription = renderString('MetaDescription')
export const PostSummary = renderString('PostSummary', () => '{PostSummary}')
export const PostTitle = renderString('PostTitle', () => '{PostTitle}')
export const RSS = renderString('RSS')
export const Title = renderString('Title')

export { default as Avatar } from './Avatar'

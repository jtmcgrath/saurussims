import { renderBlock, renderString } from '~/tumblr/helpers'

export const HomePage = renderBlock('HomePage')
export const IndexPage = renderBlock('IndexPage')
export const PermalinkPage = renderBlock('PermalinkPage')
export const PostSummary = renderBlock('PostSummary')
export const PostTitle = renderBlock('PostTitle')

export const BlogURL = renderString('BlogURL')
export const CopyrightYears = renderString('CopyrightYears')
export const CustomCSS = renderString('CustomCSS')
export const Description = renderString('Description')
export const FaviconURL = renderString('FaviconURL', () => '{Favicon}')
export const MetaDescription = renderString('MetaDescription')
export const PostSummaryText = renderString(
	'PostSummaryText',
	() => '{PostSummary}'
)
export const PostTitleText = renderString('PostTitleText', () => '{PostTitle}')
export const RSS = renderString('RSS')
export const Title = renderString('Title')

export { default as Avatar } from './Avatar'

import { renderBlock, renderString } from '~/tumblr/helpers'

export const IfContentSource = renderBlock('ContentSource')
export const IfSourceLogo = renderBlock('SourceLogo')
export const IfNoSourceLogo = renderBlock('NoSourceLogo')

export const Logo = {
	Height: renderString('LogoHeight'),
	URL: renderString('BlackLogoURL'),
	Width: renderString('LogoWidth'),
}
export const Source = {
	Title: renderString('SourceTitle'),
	URL: renderString('SourceURL'),
}

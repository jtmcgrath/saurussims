import { renderBlock, renderString } from '~/tumblr/helpers'

import ParentAvatar from './ParentAvatar'
import RootAvatar from './RootAvatar'

export const Parent = {
	Avatar: ParentAvatar,
	Name: renderString('ReblogParentName'),
	Title: renderString('ReblogParentTitle'),
	URL: renderString('ReblogParentURL'),
}

export const Root = {
	Avatar: RootAvatar,
	Name: renderString('ReblogRootName'),
	Title: renderString('ReblogRootTitle'),
	URL: renderString('ReblogRootURL'),
}

export const IfReblog = renderBlock('RebloggedFrom')
export const IfNotReblog = renderBlock('NotReblog')

import { renderString } from '~/tumblr/helpers'

type AvatarSizes = '16' | '24' | '30' | '40' | '48' | '64' | '96' | '128'

interface AvatarProps {
	size?: AvatarSizes
}

const ParentAvatar = renderString<AvatarProps>(
	'ParentAvatar',
	({ size }) => `{ReblogParentPortraitURL-${size}}`
)

ParentAvatar.defaultProps = {
	size: '128',
}

export default ParentAvatar

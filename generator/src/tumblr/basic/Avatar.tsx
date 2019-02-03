import { renderString } from '~/tumblr/helpers'

type AvatarSizes = '16' | '24' | '30' | '40' | '48' | '64' | '96' | '128'

interface AvatarProps {
	size?: AvatarSizes
}

const Avatar = renderString<AvatarProps>(
	'Avatar',
	({ size }) => `{PortraitURL-${size}}`
)

Avatar.defaultProps = {
	size: '128',
}

export default Avatar

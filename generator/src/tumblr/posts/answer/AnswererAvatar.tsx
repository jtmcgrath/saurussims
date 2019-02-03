import { renderString } from '~/tumblr/helpers'

type AvatarSizes = '16' | '24' | '30' | '40' | '48' | '64' | '96' | '128'

interface AvatarProps {
	size?: AvatarSizes
}

const AnswererAvatar = renderString<AvatarProps>(
	'AnswererAvatar',
	({ size }) => `{AnswererPortraitURL-${size}}`
)

AnswererAvatar.defaultProps = {
	size: '128',
}

export default AnswererAvatar

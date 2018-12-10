import { renderString } from '~/tumblr/helpers'

type AudioEmbedSizes = '250' | '400' | '500' | '640'

export default renderString<{ size?: AudioEmbedSizes }>(
	'AudioEmbed',
	({ size }) => (size ? `{AudioEmbed-${size}}` : '{AudioEmbed}')
)

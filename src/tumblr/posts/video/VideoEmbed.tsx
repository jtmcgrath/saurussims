import { renderString } from '~/tumblr/helpers'

type VideoEmbedSizes = '250' | '400' | '500' | '700'

export default renderString<{ size: VideoEmbedSizes }>(
	'VideoEmbed',
	({ size }) => `VideoEmbed-${size}`
)

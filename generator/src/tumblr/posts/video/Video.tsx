import { renderString } from '~/tumblr/helpers'

type VideoSizes = '250' | '400' | '500' | '700'

export default renderString<{ size: VideoSizes }>(
	'Video',
	({ size }) => `Video-${size}`
)

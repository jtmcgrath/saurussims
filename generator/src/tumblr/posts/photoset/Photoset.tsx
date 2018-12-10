import { renderString } from '~/tumblr/helpers'

type PhotosetSizes = '250' | '400' | '500' | '700'

export default renderString<{ size?: PhotosetSizes }>('Photoset', ({ size }) =>
	size ? `{Photoset-${size}}` : '{Photoset}'
)

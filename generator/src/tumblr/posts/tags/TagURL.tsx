import { renderString } from '~/tumblr/helpers'

interface TagURLProps {
	chronological?: boolean
}

export default renderString<TagURLProps>('TagURL', ({ chronological }) =>
	chronological ? '{TagURLChrono}' : '{TagURL}'
)

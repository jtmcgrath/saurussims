import { renderString } from '~/tumblr/helpers'

interface PhotosetLayoutProps {
	js?: boolean
}

export default renderString<PhotosetLayoutProps>('PhotosetLayout', ({ js }) =>
	js ? '{JSPhotosetLayout}' : '{PhotosetLayout}'
)

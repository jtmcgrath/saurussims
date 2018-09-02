import React from 'react'
import { Link } from 'react-router5'

import { PhotosetLayout } from 'shared/components'

import { PostActions } from '../elements'
import Article from './Photo.styles'

const Photo = ({ isCutout, linkProps, photos, photoset_layout }) => (
	<Article isCutout={isCutout}>
		<Link {...linkProps}>
			<PhotosetLayout layout={photoset_layout} photos={photos} />
		</Link>
		<PostActions test />
	</Article>
)

export default Photo

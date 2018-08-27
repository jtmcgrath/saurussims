import React from 'react'

import Wrapper from './Post.styles'

const Post = ({ post }) => (
	<Wrapper>
		{post.photos && post.photos.length ? (
			<img src={post.photos[0].thumbnail} alt="" />
		) : (
			'non-photo post'
		)}
	</Wrapper>
)

export default Post

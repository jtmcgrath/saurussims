import React from 'react'

const Post = ({ post }) =>
	post.photos && post.photos.length ? (
		<img src={post.photos[0].thumbnail} alt="" />
	) : (
		'non-photo post'
	)

export default Post

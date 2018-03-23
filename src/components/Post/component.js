import React, { createElement } from 'react'

import * as variants from './variants'

const Post = ({ post, type, ...props }) => {
	if (post === undefined) {
		return <p>Loading...</p>
	}

	return post ? (
		createElement(variants[post.type][type], { ...post, ...props })
	) : (
		<p>Post not found!</p>
	)
}

Post.defaultProps = {
	type: 'individual',
}

export default Post

import React, { createElement } from 'react'

import * as variants from './variants'

const Post = ({ post, ...props }) =>
	post ? (
		createElement(variants[post.type] || variants.unknown, {
			...post,
			...props,
		})
	) : (
		<p>Post not found!</p>
	)

export default Post

import React, { createElement } from 'react'

import { Loading, NotFound } from 'components'

import * as variants from './variants'

const Post = ({ post, type, ...props }) => {
	if (post === undefined) {
		return <Loading />
	}

	return post ? (
		createElement(variants[post.type][type], { ...post, ...props })
	) : (
		<NotFound title="Post not found!" />
	)
}

Post.defaultProps = {
	type: 'individual',
}

export default Post

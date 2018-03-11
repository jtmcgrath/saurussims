import React, { createElement } from 'react'
import { connect } from 'react-redux'

import * as variants from './variants'

const Post = ({ post, type }) => {
	if (post === undefined) {
		return <p>Loading...</p>
	}

	return post ? (
		createElement(variants[post.type][type], post)
	) : (
		<p>Post not found!</p>
	)
}

Post.defaultProps = {
	type: 'individual',
}

const mapStateToProps = (store, ownProps) => ({
	post: store.tumblr.posts[ownProps.postId],
})

export default connect(mapStateToProps)(Post)

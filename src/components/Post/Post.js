import React, { createElement } from 'react'
import { connect } from 'react-redux'

import * as variants from './variants'

const Post = ({ post }) => {
	if (post === undefined) {
		return <p>Loading...</p>
	}

	return post ? (
		createElement(variants[post.type], post)
	) : (
		<p>Post not found!</p>
	)
}

const mapStateToProps = (store, ownProps) => ({
	post: store.tumblr.posts[ownProps.postId],
})

export default connect(mapStateToProps)(Post)

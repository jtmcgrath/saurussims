import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router5'

import Post from 'components/Post'

const PostList = ({ posts }) => {
	if (posts === undefined) {
		return <p>Loading...</p>
	}

	return posts.length ? (
		posts.map(postId => (
			<Link key={postId} routeName="post" routeParams={{ postId }}>
				<Post postId={postId} />
			</Link>
		))
	) : (
		<p>No posts found!</p>
	)
}

const mapStateToProps = (store, ownProps) => ({
	posts: store.tumblr.pages[`${ownProps.tagName || ''}${ownProps.pageId || 1}`],
})

export default connect(mapStateToProps)(PostList)

import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router5'

import { Post, Pagination } from 'components'

const PostList = ({ posts, route }) => {
	if (posts === undefined) {
		return <p>Loading...</p>
	}

	return posts.length ? (
		<div>
			{posts.map(postId => (
				<Link key={postId} routeName="post" routeParams={{ postId }}>
					<Post postId={postId} />
				</Link>
			))}
			<Pagination />
		</div>
	) : (
		<p>No posts found!</p>
	)
}

const mapStateToProps = (store, ownProps) => ({
	posts: store.tumblr.pages[`${ownProps.tagName || ''}${ownProps.pageId || 1}`],
})

export default connect(mapStateToProps)(PostList)

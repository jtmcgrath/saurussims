import React, { Fragment, PureComponent } from 'react'
import { Link } from 'react-router5'

import { Post, Pagination } from 'components'

class PostList extends PureComponent {
	render() {
		const { posts } = this.props

		if (posts === undefined) {
			return <p>Loading...</p>
		}

		return posts.length ? (
			<Fragment>
				<PostColumns {...this.props} />
				<Pagination />
			</Fragment>
		) : (
			<p>No posts found!</p>
		)
	}
}

const PostColumns = ({ columnCount, posts }) => {
	if (!columnCount > 1) {
		return <div>{posts.map(getPostElement)}</div>
	}

	const content = posts
		.reduce((acc, postId, i) => {
			acc[i % columnCount].push(getPostElement(postId))
			return acc
		}, Array.from(Array(columnCount), () => []))
		.map((column, i) => <div key={i}>{column}</div>)

	return <div className="masonry">{content}</div>
}

const getPostElement = postId => (
	<Link key={postId} routeName="post" routeParams={{ postId }}>
		<Post postId={postId} />
	</Link>
)

export default PostList

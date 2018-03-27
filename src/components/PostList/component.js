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

const PostColumns = ({ columnCount, posts, styles }) => {
	if (!columnCount > 1) {
		return <div>{posts.map(getPostElement)}</div>
	}

	const content = posts
		.reduce((acc, post, i) => {
			acc[i % columnCount].push(getPostElement(post, styles))
			return acc
		}, Array.from(Array(columnCount), () => []))
		.map((column, i) => (
			<div key={i} className={styles.column}>
				{column}
			</div>
		))

	return <div className={styles.wrapper}>{content}</div>
}

const getPostElement = ({ postId, postSlug }, styles) => (
	<Link
		className={styles.link}
		key={postId}
		routeName={postSlug ? 'post' : 'postWithoutSlug'}
		routeParams={{ postId, postSlug }}
	>
		<Post postId={postId} type="list" />
	</Link>
)

export default PostList

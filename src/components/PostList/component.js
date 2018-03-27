import React, { Fragment, PureComponent } from 'react'

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
	<Post
		postId={postId}
		linkProps={{
			className: styles.link,
			key: postId,
			routeName: postSlug ? 'post' : 'postWithoutSlug',
			routeParams: { postId, postSlug },
		}}
		type="list"
	/>
)

export default PostList

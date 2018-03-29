import React, { Fragment, PureComponent } from 'react'

import { Loading, Pagination, Post, PostActions } from 'components'

class PostList extends PureComponent {
	render() {
		const { posts } = this.props

		if (posts === undefined) {
			return <Loading />
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

const getPostElement = ({ postId, postSlug }, styles) => {
	const linkProps = {
		key: postId,
		routeName: postSlug ? 'post' : 'postWithoutSlug',
		routeParams: { postId, postSlug },
	}

	return (
		<Post
			postId={postId}
			linkProps={{
				...linkProps,
				className: styles.link,
			}}
			postActions={<PostActions postId={postId} linkProps={linkProps} />}
			type="list"
		/>
	)
}

export default PostList

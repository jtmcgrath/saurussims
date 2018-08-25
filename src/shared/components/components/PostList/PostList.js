import React, { Fragment } from 'react'

import {
	Loading,
	NotFound,
	Pagination,
	Post,
	PostActions,
} from 'shared/components'

const PostList = ({ loading, posts, refresh, showRefresh, ...props }) => {
	if (loading || posts === undefined || posts === null) {
		return <Loading />
	}

	return posts.length ? (
		<Fragment>
			{showRefresh ? refresh : null}
			<PostColumns {...props} posts={posts} />
			<Pagination />
		</Fragment>
	) : (
		<NotFound title="No posts found!" />
	)
}

const PostColumns = ({ columnCount, posts }) => {
	if (!columnCount > 1) {
		return <div>{posts.map(getPostElement)}</div>
	}

	const content = posts
		.reduce((acc, post, i) => {
			acc[i % columnCount].push(getPostElement(post))
			return acc
		}, Array.from(Array(columnCount), () => []))
		.map((column, i) => <div key={i}>{column}</div>)

	return <div>{content}</div>
}

const getPostElement = ({ postId, postSlug }) => {
	const linkProps = {
		key: postId,
		routeName: postSlug ? 'post' : 'postWithoutSlug',
		routeParams: { postId, postSlug },
	}

	return (
		<Post
			postId={postId}
			linkProps={linkProps}
			postActions={<PostActions postId={postId} linkProps={linkProps} />}
			type="list"
		/>
	)
}

export default PostList

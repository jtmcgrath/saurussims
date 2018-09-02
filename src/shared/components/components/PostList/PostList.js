import React, { Fragment } from 'react'

import {
	Loading,
	NotFound,
	Pagination,
	Post,
	PostActions,
} from 'shared/components'

import Wrapper from './PostList.styles'

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

const PostColumns = ({ postColumnCount, posts }) => {
	if (!postColumnCount > 1) {
		return <Wrapper>{posts.map(getPostElement)}</Wrapper>
	}

	const content = posts
		.reduce((acc, post, i) => {
			acc[i % postColumnCount].push(getPostElement(post))
			return acc
		}, Array.from(Array(postColumnCount), () => []))
		.map((column, i) => (
			<div className="column" key={i}>
				{column}
			</div>
		))

	return <Wrapper>{content}</Wrapper>
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

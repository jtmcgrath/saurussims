import React, { Fragment } from 'react'

import { Loading, Pagination, Page, Post, PostActions } from 'components'

const PostList = props => {
	if (props.posts === undefined) {
		return <Loading />
	}

	return props.posts.length ? (
		<Fragment>
			<PostColumns {...props} />
			<Pagination />
		</Fragment>
	) : (
		<Page>
			{({ styles }) => (
				<Fragment>
					<header className={styles.header}>
						<h1>No Posts Found!</h1>
					</header>
					<p>
						<Link routeName="all">
							There doesn't seem to be anything here! Click your back button to
							go back a page, or click here to return to home.
						</Link>
					</p>
				</Fragment>
			)}
		</Page>
	)
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

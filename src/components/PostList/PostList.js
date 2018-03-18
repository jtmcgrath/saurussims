import React, { Fragment, PureComponent } from 'react'
import { Link } from 'react-router5'
import { connect as connectStyles } from 'react-fela'

import { Post, Pagination } from 'components'

import styles from './PostList.styles'

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

const PostColumns = ({ columnCount, columnSpacing, posts, styles }) => {
	if (!columnCount > 1) {
		return <div>{posts.map(getPostElement)}</div>
	}

	const content = posts
		.reduce((acc, postId, i) => {
			acc[i % columnCount].push(getPostElement(postId, styles))
			return acc
		}, Array.from(Array(columnCount), () => []))
		.map((column, i) => (
			<div key={i} className={styles.column}>
				{column}
			</div>
		))

	return <div className={styles.wrapper}>{content}</div>
}

const getPostElement = (postId, styles) => (
	<Link
		key={postId}
		className={styles.listItem}
		routeName="post"
		routeParams={{ postId }}
	>
		<Post postId={postId} type="list" />
	</Link>
)

export default connectStyles(styles)(PostList)

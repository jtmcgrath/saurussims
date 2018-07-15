import React from 'react'
import { Link } from 'react-router5'
import classNames from 'classnames'

const Download = ({
	avatar,
	className,
	image,
	postId,
	postSlug,
	styles,
	title,
}) => (
	<Link
		className={classNames(className, styles.link, styles.wrapper)}
		routeName={postSlug ? 'post' : 'postWithoutSlug'}
		routeParams={{ postId, postSlug }}
	>
		<img
			className={styles.image}
			src={image ? image : avatar}
			alt={title}
		/>
		<h1 className={styles.title}>{title}</h1>
	</Link>
)

export default Download

import React from 'react'
import { Link } from 'react-router5'
import classNames from 'classnames'

const Download = ({
	avatar,
	className,
	image,
	link,
	postId,
	postSlug,
	styles,
	title,
}) => {
	const Element = link ? 'a' : Link
	const props = link ? {
		href: link,
	} : {
		routeName: postSlug? 'post' : 'postWithoutSlug',
		routeParams: { postId, postSlug }
	}

	return (
		<Element
			className={classNames(className, styles.link, styles.wrapper)}
			{...props}
		>
			<img
				className={styles.image}
				src={image ? image : avatar}
				alt={title}
			/>
			<h1 className={styles.title}>{title}</h1>
		</Element>
	)
}

export default Download

import React from 'react'
import classNames from 'classnames'

import { IconLink, Like, List } from 'components'

const PostActions = ({
	isLoggedIn,
	linkProps,
	postId,
	reblog_key,
	styles,
	username,
}) => (
	<List
		className={classNames('post-actions', styles.postActions)}
		itemClassName={styles.item}
	>
		<IconLink
			href={`https://www.tumblr.com/reblog/${postId}/${reblog_key}`}
			icon="Reblog"
			styles={styles}
		>
			Reblog
		</IconLink>
		{isLoggedIn ? (
			<Like
				postId={postId}
				reblog_key={reblog_key}
				styles={styles}
				username={username}
			>
				Like
			</Like>
		) : (
			<IconLink
				href={`https://www.tumblr.com/login?redirect_to=${encodeURIComponent(
					window.location,
				)}`}
				icon="Heart"
				styles={styles}
			>
				Like
			</IconLink>
		)}
		<IconLink icon="Arrow" styles={styles} {...linkProps}>
			View
		</IconLink>
	</List>
)

export default PostActions

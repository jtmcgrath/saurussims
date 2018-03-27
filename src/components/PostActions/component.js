import React from 'react'
import classNames from 'classnames'

import { Icon, Link as BaseLink, List } from 'components'

const Link = ({ children, icon, styles, ...props }) => (
	<BaseLink className={styles.link} {...props}>
		<Icon className={styles.linkIcon} icon={icon} />
		<span className={styles.linkText}>{children}</span>
	</BaseLink>
)

const PostActions = ({ linkProps, postId, reblog_key, styles }) => (
	<List
		className={classNames('post-actions', styles.postActions)}
		itemClassName={styles.item}
	>
		<Link
			href={`https://www.tumblr.com/reblog/${postId}/${reblog_key}`}
			icon="Reblog"
			styles={styles}
		>
			Reblog
		</Link>
		<Link href="like" icon="Heart" styles={styles}>
			Like
		</Link>
		<Link icon="Arrow" styles={styles} {...linkProps}>
			View
		</Link>
	</List>
)

export default PostActions

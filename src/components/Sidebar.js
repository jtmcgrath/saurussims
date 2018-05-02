import React from 'react'
import classNames from 'classnames'
import moment from 'moment'

import { IconLink, Like, TagLink, Terms } from 'components'
import { withConfig } from 'hocs'

const Sidebar = ({
	caption,
	children,
	className,
	note_count,
	postId,
	reblog,
	reblog_key,
	styles,
	tags,
	timestamp,
	username,
}) => {
	const reblogElement = !caption &&
		reblog &&
		reblog.tree_html && (
			<div dangerouslySetInnerHTML={{ __html: reblog.tree_html }} />
		)

	const tagElements = tags &&
		tags.length > 0 && (
			<p>{tags.map(tagName => <TagLink key={tagName} tag={tagName} />)}</p>
		)

	const showTerms = tags.some(tag => tag.toLowerCase() === 'downloads')

	return (
		<div
			className={
				className
					? className
					: classNames(styles.listItem, styles.extraPadded, styles.fixed)
			}
		>
			<p>
				{moment.unix(timestamp).format('Do MMMM YYYY')}
				&nbsp;
				<Like
					postId={postId}
					reblog_key={reblog_key}
					styles={styles}
					username={username}
				>
					{note_count || ''}
				</Like>
				&nbsp;
				<IconLink
					href={`https://www.tumblr.com/reblog/${postId}/${reblog_key}`}
					icon="Reblog"
					styles={styles}
				>
					Reblog
				</IconLink>
			</p>
			{children}
			{reblogElement}
			{tagElements}
			{showTerms && <Terms />}
		</div>
	)
}

export default withConfig('username')(Sidebar)

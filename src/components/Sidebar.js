import React from 'react'
import classNames from 'classnames'
import moment from 'moment'

import { TagLink } from 'components'

const Sidebar = ({
	caption,
	className,
	note_count,
	reblog,
	styles,
	tags,
	timestamp,
}) => (
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
			{note_count && `♥ ${note_count}`}
		</p>
		{!caption &&
			reblog &&
			reblog.tree_html && (
				<div dangerouslySetInnerHTML={{ __html: reblog.tree_html }} />
			)}
		{tags &&
			tags.length > 0 && (
				<p>{tags.map(tagName => <TagLink key={tagName} tag={tagName} />)}</p>
			)}
	</div>
)

export default Sidebar

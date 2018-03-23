import React from 'react'
import classNames from 'classnames'
import moment from 'moment'

import { TagLink } from 'components'

const Photo = ({
	caption,
	note_count,
	notes,
	photos,
	reblog,
	styles,
	tags,
	timestamp,
	...props
}) => (
	<article className={classNames(styles.wrapper, styles.responsiveWrapper)}>
		<div className={classNames(styles.wide, styles.listItem)}>
			{photos &&
				photos.map(({ caption, original_size: { url } }, i) => (
					<img key={i} src={url} alt={caption} />
				))}
			{caption && (
				<div
					className={classNames(styles.extraPadded)}
					dangerouslySetInnerHTML={{ __html: caption }}
				/>
			)}
		</div>
		<div className={styles.narrow}>
			<div
				className={classNames(
					styles.listItem,
					styles.extraPadded,
					styles.fixed,
				)}
			>
				<p>
					{moment.unix(timestamp).format('Do MMMM YYYY')} ♥ {note_count}
				</p>
				{!caption &&
					reblog &&
					reblog.tree_html && (
						<div dangerouslySetInnerHTML={{ __html: reblog.tree_html }} />
					)}
				{tags &&
					tags.length > 0 && (
						<p>
							{tags.map(tagName => <TagLink key={tagName} tag={tagName} />)}
						</p>
					)}
			</div>
		</div>
	</article>
)

export default Photo

import React, { Fragment } from 'react'

import { TagLink } from 'components'

const Photo = ({ photos, timestamp, note_count, reblog, tags, ...props }) => (
	<Fragment>
		{photos &&
			photos.map(({ caption, original_size: { url } }, i) => (
				<img key={i} src={url} alt={caption} />
			))}
		<p>
			{timestamp} {note_count}
		</p>
		{reblog && <div dangerouslySetInnerHTML={{ __html: reblog.tree_html }} />}
		{tags && tags.map(tagName => <TagLink key={tagName} tag={tagName} />)}
		<pre>{JSON.stringify({ component: 'Photo', ...props }, null, 2)}</pre>
	</Fragment>
)

export default Photo

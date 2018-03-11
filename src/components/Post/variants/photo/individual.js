import React, { Fragment } from 'react'
import { Link } from 'react-router5'

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
		{tags &&
			tags.map(tagName => (
				<Link key={tagName} routeName="tag" routeParams={{ tagName }}>
					#{tagName}
				</Link>
			))}
		<pre>{JSON.stringify({ component: 'Photo', ...props }, null, 2)}</pre>
	</Fragment>
)

export default Photo

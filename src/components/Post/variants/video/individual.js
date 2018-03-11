import React from 'react'

const Video = props => (
	<pre>{JSON.stringify({ component: 'Video', ...props }, null, 2)}</pre>
)

export default Video

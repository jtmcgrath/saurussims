import React from 'react'

const Photo = props => (
	<pre>{JSON.stringify({ component: 'Photo', ...props }, null, 2)}</pre>
)

export default Photo

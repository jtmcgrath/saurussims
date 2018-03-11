import React from 'react'

const Link = props => (
	<pre>{JSON.stringify({ component: 'Link', ...props }, null, 2)}</pre>
)

export default Link

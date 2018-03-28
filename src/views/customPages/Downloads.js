import React from 'react'

const Downloads = props => (
	<pre>{JSON.stringify({ component: 'Downloads', ...props }, null, 2)}</pre>
)

export default Downloads

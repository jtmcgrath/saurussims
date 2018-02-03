import React from 'react'

const Audio = props => (
	<pre>{JSON.stringify({ component: 'Audio', ...props }, null, 2)}</pre>
)

export default Audio

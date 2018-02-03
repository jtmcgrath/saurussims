import React from 'react'

const Ask = props => (
	<pre>{JSON.stringify({ component: 'Ask', ...props }, null, 2)}</pre>
)

export default Ask

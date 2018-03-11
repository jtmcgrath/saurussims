import React from 'react'

const Text = props => (
	<pre>{JSON.stringify({ component: 'Text', ...props }, null, 2)}</pre>
)

export default Text

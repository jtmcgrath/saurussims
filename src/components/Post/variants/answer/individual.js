import React from 'react'

const Answer = props => (
	<pre>{JSON.stringify({ component: 'Answer', ...props }, null, 2)}</pre>
)

export default Answer

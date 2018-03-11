import React from 'react'

const Quote = props => (
	<pre>{JSON.stringify({ component: 'Quote', ...props }, null, 2)}</pre>
)

export default Quote

import React from 'react'

const Sims = props => (
	<pre>{JSON.stringify({ component: 'Sims', ...props }, null, 2)}</pre>
)

export default Sims

import React from 'react'

import { Avatar } from '~/tumblr'

const App = (props: {}) => (
	<div>
		<Avatar />
		<Avatar size="30" />
		<pre>{JSON.stringify(props, null, 2)}</pre>
	</div>
)

export default App

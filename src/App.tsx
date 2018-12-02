import React from 'react'

import { Avatar, PermalinkPage } from '~/tumblr'

const App = (props: {}) => (
	<div>
		<PermalinkPage>
			<Avatar />
			<Avatar size="30" />
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</PermalinkPage>
	</div>
)

export default App

import React from 'react'

import { Appearance, Avatar, IfPermalinkPage } from '~/tumblr'

const App = (props: {}) => (
	<div>
		<IfPermalinkPage>
			<Appearance.TitleFont />
			<Avatar />
			<Avatar size="30" />
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</IfPermalinkPage>
	</div>
)

export default App

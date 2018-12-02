import React from 'react'

import { Appearance, Avatar, PermalinkPage } from '~/tumblr'

const App = (props: {}) => (
	<div>
		<PermalinkPage>
			<Appearance.TitleFont />
			<Avatar />
			<Avatar size="30" />
			<pre>{JSON.stringify(props, null, 2)}</pre>
		</PermalinkPage>
	</div>
)

export default App

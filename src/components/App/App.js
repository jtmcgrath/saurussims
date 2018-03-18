import React, { Fragment } from 'react'

import routeComponents from 'views'
import { Navigation, NotFound } from 'components'

const App = ({ columnCount, columnSpacing, route }) => {
	const segment = route ? route.name.split('.')[0] : undefined

	const Content = routeComponents[segment] || NotFound

	return (
		<Fragment>
			<Navigation />
			<div>
				<Content />
			</div>
		</Fragment>
	)
}

export default App

import React, { Fragment } from 'react'
import { connect } from 'react-redux'

import routeComponents from 'views'
import { Navigation, NotFound } from 'components'

const App = ({ route }) => {
	const segment = route ? route.name.split('.')[0] : undefined

	const Content = routeComponents[segment] || NotFound

	return (
		<Fragment>
			<Navigation />
			<Content />
		</Fragment>
	)
}

export default connect(state => state.router)(App)

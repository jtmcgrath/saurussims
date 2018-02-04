import React from 'react'
import { connect } from 'react-redux'
import { routeNodeSelector } from 'redux-router5'

import routeComponents from 'views'
import { Navigation, NotFound } from 'components'

const App = ({ route }) => {
	const segment = route ? route.name.split('.')[0] : undefined

	const Content = routeComponents[segment] || NotFound

	return [<Navigation key="nav" />, <Content key="content" />]
}

export default connect(state => routeNodeSelector(''))(App)

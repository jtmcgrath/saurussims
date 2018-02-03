import { createElement } from 'react'
import { connect } from 'react-redux'
import { routeNodeSelector } from 'redux-router5'

import routeComponents from 'views'
import NotFound from 'components/NotFound'

const App = ({ route }) => {
	const segment = route ? route.name.split('.')[0] : undefined

	return createElement(routeComponents[segment] || NotFound)
}

export default connect(state => routeNodeSelector(''))(App)

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { requestPage } from 'store/actions'

class App extends Component {
	componentDidMount() {
		this.props.requestPage(1)
	}

	render() {
		return <p>Under construction!</p>
	}
}

export default connect(null, { requestPage })(App)

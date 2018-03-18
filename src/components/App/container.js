import { connect } from 'react-redux'

import { compose } from 'utils/general'
import { withLifecycle } from 'hocs'
import { resizeViewport } from 'store'

import App from './App'

const mapStateToProps = (state, props) => ({
	...props,
	...state.viewport,
	...state.router,
})

export default compose(
	connect(mapStateToProps, { resizeViewport }),
	withLifecycle({
		didMount: ({ resizeViewport }) =>
			window.addEventListener('resize', resizeViewport),
		willUnmount: ({ resizeViewport }) =>
			window.removeEventListener('resize', resizeViewport),
	}),
)(App)

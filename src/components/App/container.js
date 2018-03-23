import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { withConfig, withLifecycle } from 'hocs'
import { getColumnCount, getRouter, isDesktop, resizeViewport } from 'store'

import App from './component'
import styles from './styles'

const mapStateToProps = (store, props) => ({
	...props,
	...getRouter(store),
	columnCount: getColumnCount(store),
	isDesktop: isDesktop(store),
})

export default compose(
	connect(mapStateToProps, { resizeViewport }),
	withLifecycle({
		didMount: ({ resizeViewport }) =>
			window.addEventListener('resize', resizeViewport),
		willUnmount: ({ resizeViewport }) =>
			window.removeEventListener('resize', resizeViewport),
	}),
	withConfig('columnWidth', 'columnSpacing', 'navigation'),
	connectStyles(styles),
)(App)

import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { withConfig, withEventListener, withTumblrConnection } from 'hocs'
import { getColumnCount, getRouter, isDesktop, resizeViewport } from 'store'

import App from './component'
import styles from './styles'

const mapStateToProps = (store, props) => ({
	...getRouter(store),
	columnCount: getColumnCount(store),
	isDesktop: isDesktop(store),
})

export default compose(
	withTumblrConnection,
	connect(mapStateToProps, { resizeViewport }),
	withEventListener('resize', 'resizeViewport'),
	withConfig('columnSpacing', 'columnWidth', 'navigation'),
	connectStyles(styles),
)(App)

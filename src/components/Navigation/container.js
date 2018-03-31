import withState from 'react-state-hoc'
import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { withConfig } from 'hocs'
import { getColumnCount, isDesktop } from 'store'

import Navigation from './component'
import styles from './styles'

const mapStateToProps = (store, props) => ({
	...props,
	columnCount: getColumnCount(store),
	isDesktop: isDesktop(store),
})

export default compose(
	connect(mapStateToProps),
	withState({ visible: false }),
	withConfig('background', 'columnSpacing', 'navigation'),
	connectStyles(styles),
)(Navigation)

import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { withConfig } from 'hocs'
import { getColumnCount, getPost, isDesktop } from 'store'

import Download from './component'
import styles from './styles'

const mapStateToProps = state => ({
	columnCount: getColumnCount(state),
	isDesktop: isDesktop(state),
})

export default compose(
	withConfig('columnSpacing', 'columnWidth', 'itemPadding'),
	connect(mapStateToProps),
	connectStyles(styles),
)(Download)

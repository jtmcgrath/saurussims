import { createElement } from 'react'
import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { withConfig } from 'hocs'
import { getColumnCount, getPost, isDesktop } from 'store'

import * as variants from './variants'
import styles from './styles'

const Empty = () => null

const GetVariant = props =>
	createElement(variants[props.contentType] || Empty, props)

const mapStateToProps = state => ({
	columnCount: getColumnCount(state),
	isDesktop: isDesktop(state),
})

export default compose(
	withConfig('columnSpacing', 'columnWidth', 'itemPadding'),
	connect(mapStateToProps),
	connectStyles(styles),
)(GetVariant)

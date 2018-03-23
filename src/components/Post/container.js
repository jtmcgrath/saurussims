import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { withConfig } from 'hocs'
import { getPost, getColumnCount, isDesktop } from 'store'

import Post from './component'
import styles from './styles'

const mapStateToProps = (state, { postId }) => ({
	columnCount: getColumnCount(state),
	isDesktop: isDesktop(state),
	post: getPost(state, postId),
})

export default compose(
	withConfig('columnSpacing', 'columnWidth'),
	connect(mapStateToProps),
	connectStyles(styles),
)(Post)

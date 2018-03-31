import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { withConfig } from 'hocs'
import { getColumnCount, getPage, isDesktop as getIsDesktop } from 'store'

import PostList from './component'
import styles from './styles'

const mapStateToProps = (state, props) => {
	const isDesktop = getIsDesktop(state)

	return {
		columnCount: isDesktop ? getColumnCount(state) - 1 : getColumnCount(state),
		posts: getPage(state, `${props.tagName || ''}${props.pageId || 1}`),
		isDesktop,
	}
}

export default compose(
	withConfig('columnSpacing', 'columnWidth', 'itemPadding'),
	connect(mapStateToProps),
	connectStyles(styles),
)(PostList)

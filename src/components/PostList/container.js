import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { withCache, withConfig } from 'hocs'
import { getColumnCount, getPage, isDesktop as getIsDesktop } from 'store'

import PostList from './component'
import styles from './styles'

const mapStateToProps = (state, props) => {
	const isDesktop = getIsDesktop(state)
	const columnCount = getColumnCount(state)

	return {
		columnCount: isDesktop ? columnCount - 1 : columnCount,
		posts: getPage(state, `${props.tagName || ''}${props.pageId || 1}`),
		isDesktop,
	}
}

export default compose(
	withConfig('columnSpacing', 'columnWidth', 'itemPadding'),
	connect(mapStateToProps),
	withCache('posts'),
	connectStyles(styles),
)(PostList)

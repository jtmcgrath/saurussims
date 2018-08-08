import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { withCache, withConfig } from 'hocs'
import { getColumnCount, getPage, isDesktop as getIsDesktop } from 'store'

import PostList from './component'
import styles from './styles'

const mapStateToProps = (state, { filters, pageId = 1, tagName = '' }) => {
	const isDesktop = getIsDesktop(state)
	const columnCount = getColumnCount(state)
	const allPosts = getPage(state, `${tagName}${pageId}`)
	const filteredPosts =
		allPosts && filters
			? allPosts.filter(
					({ tags }) =>
						!tags.some(tag =>
							filters.some(filter => filter === tag)
						)
			  )
			: allPosts

	return {
		columnCount: isDesktop ? columnCount - 1 : columnCount,
		posts: filteredPosts,
		isDesktop,
	}
}

export default compose(
	withConfig('columnSpacing', 'columnWidth', 'itemPadding'),
	connect(mapStateToProps),
	withCache('posts'),
	connectStyles(styles),
)(PostList)

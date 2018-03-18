import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'

import PostList from './PostList'
import styles from './PostList.styles'

const mapStateToProps = (
	{ tumblr, viewport: { columnCount, ...viewport } },
	props,
) => ({
	posts: tumblr.pages[`${props.tagName || ''}${props.pageId || 1}`],
	columnCount: columnCount > 2 ? columnCount - 1 : columnCount,
	isDesktop: columnCount > 2,
	...viewport,
})

export default compose(connect(mapStateToProps), connectStyles(styles))(
	PostList,
)

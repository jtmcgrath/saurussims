import { withRoute } from 'react-router5'
import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { getPageCount } from 'store'
import { withConfig } from 'hocs'

import Pagination from './component'
import styles from './styles'

const mapStateToProps = (state, props) => {
	const tagName = props.route.params.tagName
	return {
		linkProps: {
			routeName: `${tagName ? 'tag' : 'all'}.page`,
			routeParams: props.route.params,
		},
		pageCount: getPageCount(state, tagName || 'all'),
		pageId: props.route.params.pageId,
	}
}

export default compose(
	withRoute,
	withConfig('columnSpacing'),
	connect(mapStateToProps),
	connectStyles(styles),
)(Pagination)

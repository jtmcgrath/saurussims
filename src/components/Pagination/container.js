import { withRoute } from 'react-router5'
import { connect } from 'react-redux'

import { compose } from 'utils/general'

import Pagination from './Pagination'

const mapStateToProps = (state, props) => {
	const tagName = props.route.params.tagName
	return {
		linkProps: {
			routeName: `${tagName ? 'tag' : 'all'}.page`,
			routeParams: props.route.params,
		},
		pageCount: state.tumblr.pageCounts[tagName || 'all'],
		pageId: props.route.params.pageId,
	}
}

export default compose(withRoute, connect(mapStateToProps))(Pagination)

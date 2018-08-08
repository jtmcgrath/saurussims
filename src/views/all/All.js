import React from 'react'
import { connect } from 'react-redux'

import { getRouter } from 'store'
import { PostList } from 'components'
import { compose } from 'utils/general'
import { withConfig } from 'hocs'

const All = ({ hideOnHomepage, route }) => (
	<PostList
		key={route.path}
		pageId={route.params.pageId}
		hideTags={hideOnHomepage}
	/>
)

export default compose(
	connect(getRouter),
	withConfig('hideOnHomepage'),
)(All)

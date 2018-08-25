import React from 'react'
import { connect } from 'react-redux'
import { createRouteNodeSelector } from 'redux-router5'

import { PostList } from 'shared/components'
import { withContext } from 'shared/context'
import { compose } from 'shared/utils'

const All = ({ hideOnHomepage, route }) => (
	<PostList
		key={route.path}
		pageId={route.params.pageId}
		hideTags={hideOnHomepage}
	/>
)

export default compose(
	withContext('hideOnHomepage'),
	connect(createRouteNodeSelector('all'))
)(All)

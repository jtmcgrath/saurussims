import React from 'react'
import { routeNode } from 'react-router5'

import { PostList } from 'shared/components'
import { withContext } from 'shared/context'
import { compose } from 'shared/utils'

const All = ({ hideOnHomepage, route }) => (
	<PostList key={route.path} route={route} hideTags={hideOnHomepage} />
)
export default compose(
	routeNode('all'),
	withContext('hideOnHomepage')
)(All)

import React from 'react'
import { connect } from 'react-redux'

import { getRouter } from 'store'
import { PostList } from 'components'

const All = ({ route }) => (
	<PostList key={route.path} pageId={route.params.pageId} />
)

export default connect(getRouter)(All)

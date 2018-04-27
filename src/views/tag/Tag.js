import React from 'react'
import { connect } from 'react-redux'

import { getRouter } from 'store'
import { PostList } from 'components'

const Tag = ({ route }) => (
	<PostList
		key={route.path}
		tagName={route.params.tagName}
		pageId={route.params.pageId}
	/>
)

export default connect(getRouter)(Tag)

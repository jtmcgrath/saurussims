import React from 'react'
import { connect } from 'react-redux'

import { PostList } from 'components'

const Tag = ({ route }) => (
	<PostList tagName={route.params.tagName} pageId={route.params.pageId} />
)

export default connect(state => state.router)(Tag)

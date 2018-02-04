import React from 'react'
import { connect } from 'react-redux'
import { routeNodeSelector } from 'redux-router5'

import { PostList } from 'components'

const Tag = ({ route }) => (
	<PostList tagName={route.params.tagName} pageId={route.params.pageId} />
)

export default connect(state => routeNodeSelector('tag'))(Tag)

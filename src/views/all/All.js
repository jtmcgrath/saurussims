import React from 'react'
import { connect } from 'react-redux'
import { routeNodeSelector } from 'redux-router5'

import { PostList } from 'components'

const All = ({ route }) => <PostList pageId={route.params.pageId} />

export default connect(state => routeNodeSelector('all'))(All)

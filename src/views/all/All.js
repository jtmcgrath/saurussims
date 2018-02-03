import React from 'react'
import { connect } from 'react-redux'
import { routeNodeSelector } from 'redux-router5'

import PostList from 'components/PostList'

const All = ({ route }) => <PostList pageId={route.params.pageId} />

export default connect(state => routeNodeSelector('all.page'))(All)

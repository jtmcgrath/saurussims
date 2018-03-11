import React from 'react'
import { connect } from 'react-redux'

import { PostList } from 'components'

const All = ({ route }) => <PostList pageId={route.params.pageId} />

export default connect(state => state.router)(All)

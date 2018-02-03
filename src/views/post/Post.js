import React from 'react'
import { connect } from 'react-redux'
import { routeNodeSelector } from 'redux-router5'

import DisplayPost from 'components/Post'

const Post = ({ route }) => <DisplayPost postId={route.params.postId} />

export default connect(state => routeNodeSelector('post'))(Post)

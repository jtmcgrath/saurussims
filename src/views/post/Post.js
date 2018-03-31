import React from 'react'
import { connect } from 'react-redux'

import { getRouter } from 'store'
import { Post as DisplayPost } from 'components'

const Post = ({ route }) => <DisplayPost postId={route.params.postId} />

export default connect(getRouter)(Post)

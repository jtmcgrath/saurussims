import { connect } from 'react-redux'

import { getPost } from 'dependencies/store'

import Post from './Post'

const mapStateToProps = (state, { postId }) => ({
	post: getPost(state, postId),
})

export default connect(mapStateToProps)(Post)

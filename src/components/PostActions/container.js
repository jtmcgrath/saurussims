import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { getPost } from 'store'

import PostActions from './component'
import styles from './styles'

const mapStateToProps = (state, props) => {
	const post = getPost(state, props.postId)

	return {
		reblog_key: post.reblog_key,
	}
}

export default compose(connect(mapStateToProps), connectStyles(styles))(
	PostActions,
)

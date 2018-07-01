import { connect } from 'react-redux'
import { connect as connectStyles } from 'react-fela'

import { compose } from 'utils/general'
import { getReblogKey, getUserLoggedIn } from 'store'
import { withConfig } from 'hocs'

import PostActions from './component'
import styles from './styles'

const mapStateToProps = (state, props) => ({
	reblog_key: getReblogKey(state, props.postId),
	isLoggedIn: getUserLoggedIn(state),
})

export default compose(
	withConfig('account.username'),
	connect(mapStateToProps),
	connectStyles(styles),
)(PostActions)

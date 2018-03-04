import React, { Component } from 'react'
import { connect } from 'react-redux'

import PostList from './PostList'

const getColumnCount = () =>
	Math.floor(
		document.getElementById('root').clientWidth /
			(window.config.columnWidth + window.config.columnSpacing),
	) || 1

class PostListContainer extends Component {
	state = {
		columnCount: getColumnCount(),
	}

	componentDidMount() {
		window.addEventListener('resize', this.resetColumnCount)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resetColumnCount)
	}

	resetColumnCount = () => {
		this.setState({
			columnCount: getColumnCount(),
		})
	}

	render() {
		return <PostList {...this.props} {...this.state} />
	}
}

const mapStateToProps = (store, ownProps) => ({
	posts: store.tumblr.pages[`${ownProps.tagName || ''}${ownProps.pageId || 1}`],
})

export default connect(mapStateToProps)(PostListContainer)

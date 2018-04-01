import React, { Component } from 'react'
import classNames from 'classnames'

import { Icon } from 'components'
// import { createLikeFrame } from 'tumblr'

class Like extends Component {
	componentDidMount() {
		// createLikeFrame(this.iframe, this.props.postId).then(() => {
		// 	// this.iframe.contentWindow.postMessage(
		// 	// 	// 'tumblr-like-requests:likeButton:iframeLoaded',
		// 	// 	'test',
		// 	// 	'*',
		// 	// )
		// })
	}

	handleClick = () => {
		window.postMessage(
			`{"method":"tumblr-like-requests:likeButton:toggleLike","args":[{"postId":"${
				this.props.postId
			}","like":${!this.props.liked},"rootId":""}]}`,
			'*',
		)
	}

	render() {
		const { postId, styles, username } = this.props

		return (
			<button
				className={classNames('like_button', styles.link)}
				onClick={this.handleClick}
				data-js-like={postId}
				data-post-id={postId}
				data-blog-name={username}
				id={`like_button_${postId}`}
			>
				{/* <iframe
					className={classNames('like_toggle', styles.iframe)}
					frameBorder="0"
					id={`like_iframe_${postId}`}
					name={`like_iframe_${postId}`}
					ref={ref => {
						this.iframe = ref
					}}
					scrolling="no"
					title={`like_iframe_${postId}`}
				/> */}
				<Icon
					className={classNames(styles.linkIcon, styles.heartIcon)}
					icon="Heart"
				/>
				<span className={styles.linkText}>Like</span>
			</button>
		)
	}
}

export default Like

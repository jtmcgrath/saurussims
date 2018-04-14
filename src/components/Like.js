import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import classNames from 'classnames'

import { Icon } from 'components'

let debounceTimer

const loadLikes = () => {
	clearTimeout(debounceTimer)
	debounceTimer = setTimeout(() => {
		const likeButtons = document.getElementsByClassName('like_button')
		const likeIds = Array.from(likeButtons).map(({ dataset }) => dataset.postId)
		window.Tumblr && window.Tumblr.LikeButton.get_status_by_post_ids(likeIds)
	}, 200)
}

const getIcon = ({ styles }) =>
	renderToStaticMarkup(<Icon icon="Heart" className={styles.linkIcon} />)

const getURL = ({ postId, reblog_key, username }) =>
	'https://assets.tumblr.com/assets/html/like_iframe.html?_v=fc298e85f978b8662a643fe0a6b8c638#name=' +
	username +
	'&post_id=' +
	postId +
	'&color=black&rk=' +
	reblog_key

const getHTML = ({ children, postId, reblog_key, styles, username }) => `
  <div
    class="like_button"
    data-post-id="${postId}"
    data-blog-name="${username}"
    id="like_button_${postId}"
  >
     <iframe
       id="like_iframe_${postId}"
       src="${getURL({ postId, reblog_key, username })}"
       scrolling="no"
       frameborder="0"
       class="like_toggle ${styles.iframe}"
       allowtransparency="true"
       name="like_iframe_${postId}"
     ></iframe>
  </div>
  ${getIcon({ styles })}
  <span class="${styles.linkText}">${children}</span>
`

const Like = props => {
	loadLikes()
	return (
		<div
			className={classNames(props.styles.link)}
			dangerouslySetInnerHTML={{ __html: getHTML(props) }}
		/>
	)
}

export default Like

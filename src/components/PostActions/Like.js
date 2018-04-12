import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import classNames from 'classnames'

import { Icon } from 'components'

const getIcon = ({ styles }) =>
	renderToStaticMarkup(<Icon icon="Heart" className={styles.linkIcon} />)

const getURL = ({ postId, reblog_key, username }) =>
	'https://assets.tumblr.com/assets/html/like_iframe.html?_v=fc298e85f978b8662a643fe0a6b8c638#name=' +
	username +
	'&post_id=' +
	postId +
	'&color=black&rk=' +
	reblog_key

const getHTML = ({ postId, reblog_key, styles, username }) => `
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
  <span class="${styles.linkText}">Like</span>
`

const Like = props => (
	<div
		className={classNames(props.styles.link)}
		dangerouslySetInnerHTML={{ __html: getHTML(props) }}
	/>
)

export default Like

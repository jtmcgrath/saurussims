import React, { Fragment } from 'react'

const Reply = ({ blog_name, blog_url, reply_text }) => (
	<Fragment>
		<a href={blog_url}>{blog_name}</a> said: {reply_text}
	</Fragment>
)

export default Reply

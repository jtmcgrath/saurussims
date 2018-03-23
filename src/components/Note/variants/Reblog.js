import React, { Fragment } from 'react'

const Reblog = ({ blog_name, blog_url, reblog_parent_blog_name }) => (
	<Fragment>
		<a href={blog_url}>{blog_name}</a> reblogged this from &nbsp;
		<a href={`https://${reblog_parent_blog_name}.tumblr.com`}>
			{reblog_parent_blog_name}
		</a>
	</Fragment>
)

export default Reblog

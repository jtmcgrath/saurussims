import React, { Fragment } from 'react'

const Like = ({ blog_name, blog_url }) => (
	<Fragment>
		<a href={blog_url}>{blog_name}</a> liked this
	</Fragment>
)

export default Like

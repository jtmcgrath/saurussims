import React, { Fragment } from 'react'

const Posted = ({ blog_name, blog_url }) => (
	<Fragment>
		<a href={blog_url}>{blog_name}</a> posted this
	</Fragment>
)

export default Posted

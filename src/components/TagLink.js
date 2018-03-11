import React from 'react'
import { Link } from 'react-router5'

const TagLink = ({ tag }) => (
	<Link routeName="tag" routeParams={{ tagName: tag.replace(' ', '-') }}>
		#{tag}
	</Link>
)

export default TagLink

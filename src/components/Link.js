import React from 'react'
import { Link as SourceLink } from 'react-router5'

const Link = props => {
	const Component = props.routeName ? SourceLink : 'a'

	return <Component {...props} />
}

export default Link

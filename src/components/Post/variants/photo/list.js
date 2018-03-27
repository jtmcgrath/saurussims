import React from 'react'

import Cutout from './cutout/list'
import Standard from './standard/list'

const Photo = props =>
	props.tags.includes('cutout') ? (
		<Cutout {...props} />
	) : (
		<Standard {...props} />
	)

export default Photo

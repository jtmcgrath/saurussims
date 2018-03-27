import React from 'react'
import withState from 'react-state-hoc'

import Cutout from './cutout/individual'
import Standard from './standard/individual'

const Photo = props =>
	props.tags.includes('cutout') ? (
		<Cutout {...props} />
	) : (
		<Standard {...props} />
	)

export default withState({ active: null })(Photo)

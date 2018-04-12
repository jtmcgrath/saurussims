import { createElement } from 'react'
import withState from 'react-state-hoc'

import Cutout from './cutout/individual'
import Standard from './standard/individual'

const Photo = props =>
	createElement(
		props.tags.some(tag => tag.toLowerCase() === 'cutout') ? Cutout : Standard,
		props,
	)

export default withState({ active: null })(Photo)

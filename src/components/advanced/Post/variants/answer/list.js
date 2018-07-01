import { createElement } from 'react'

import Standard from './standard/list'
import Wcif from './wcif/list'

const Answer = props =>
	createElement(
		props.tags.some(tag => tag.toLowerCase() === 'wcif') ? Wcif : Standard,
		props,
	)

export default Answer

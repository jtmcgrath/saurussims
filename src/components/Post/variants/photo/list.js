import { createElement } from 'react'

import Cutout from './cutout/list'
import Standard from './standard/list'

const Photo = props =>
	createElement(
		props.tags.some(tag => tag.toLowerCase() === 'cutout') ? Cutout : Standard,
		props,
	)

export default Photo

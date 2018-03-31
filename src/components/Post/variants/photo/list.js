import { createElement } from 'react'

import Cutout from './cutout/list'
import Standard from './standard/list'

const Photo = props =>
	createElement(props.tags.includes('cutout') ? Cutout : Standard, props)

export default Photo

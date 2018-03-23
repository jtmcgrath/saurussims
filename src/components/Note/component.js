import { createElement } from 'react'

import * as variants from './variants'

const Note = ({ type, ...props }) => createElement(variants[type], props)

export default Note

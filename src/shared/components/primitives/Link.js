import { createElement } from 'react'
import { Link as InternalLink } from 'react-router5'

const Link = props => createElement(props.routeName ? InternalLink : 'a', props)

export default Link

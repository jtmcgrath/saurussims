import { createElement } from 'react'
import { Link as SourceLink } from 'react-router5'

const Link = props => createElement(props.routeName ? SourceLink : 'a', props)

export default Link

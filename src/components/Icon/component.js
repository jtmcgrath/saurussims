import { createElement } from 'react'

import * as variants from './variants'

const Icon = ({ icon, ...props }) => createElement(variants[icon], props)

Icon.defaultProps = {
	xmlns: 'http://www.w3.org/2000/svg',
	width: '24',
	height: '24',
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: '2',
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
}

export default Icon

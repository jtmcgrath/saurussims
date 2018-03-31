import { createElement } from 'react'

import * as variants from './variants'

const Icon = ({ icon, ...props }) => createElement(variants[icon], props)

Icon.defaultProps = {
	fill: 'none',
	height: '24',
	stroke: 'currentColor',
	strokeLinecap: 'round',
	strokeLinejoin: 'round',
	strokeWidth: '2',
	viewBox: '0 0 24 24',
	width: '24',
	xmlns: 'http://www.w3.org/2000/svg',
}

export default Icon

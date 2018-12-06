import React from 'react'

import * as variants from './variants'
import { Variants } from './variants'

export interface IconProps {
	fill?: string
	height?: string
	stroke?: string
	strokeLinecap?: 'butt' | 'round' | 'square'
	strokeLinejoin?: 'bevel' | 'inherit' | 'miter' | 'round'
	strokeWidth?: string
	viewBox?: string
	width?: string
	xmlns?: string
}

const Icon: React.SFC<IconProps & { icon: Variants }> = ({ icon, ...props }) =>
	React.createElement(variants[icon], props)

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

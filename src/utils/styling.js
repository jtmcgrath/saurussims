import { margin } from 'polished'

export const borderRadius = (...args) => ({
	borderTopLeftRadius: args[0],
	borderTopRightRadius: args[1] || args[0],
	borderBottomRightRadius: args[2] || args[0],
	borderBottomLeftRadius: args[3] || args[1] || args[0],
})

export const link = {
	display: 'inline-block',
	marginRight: '4px',
}

export const listItem = ({ columnSpacing, radius = 4 }) => ({
	...borderRadius(`${radius}px`),
	...margin(`${columnSpacing}px`, `${columnSpacing / 2}px`),
	background: 'white',
	display: 'block',
	overflow: 'hidden',
})

export const listItemPadding = ({ itemPadding, radius = 4 }) => ({
	padding: `${itemPadding > radius / 2 ? itemPadding : radius / 2}px`,
})

export const invert = initial =>
	({
		bottom: 'top',
		left: 'right',
		right: 'left',
		top: 'bottom',
	}[initial])

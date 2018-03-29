import { invert } from 'utils/styling'

const overlay = {
	bottom: 0,
	left: 0,
	position: 'fixed',
	right: 0,
	top: 0,
	zIndex: 2,
}

const button = position => ({
	bottom: 0,
	position: 'absolute',
	top: 0,
	width: '50%',
	[position]: 0,
})

const label = ({ columnSpacing }, position) => ({
	color: 'white',
	lineHeight: `${columnSpacing}px`,
	pointerEvents: 'none',
	position: 'absolute',
	right: 0,
	zIndex: 3,
	[invert(position)]: '100%',
})

export default {
	root: ({ columnSpacing }) => ({
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
		padding: `${columnSpacing / 2}px`,
		...overlay,
	}),
	shadow: () => ({
		background: 'rgba(0,0,0,0.5)',
		height: '100%',
		width: '100%',
		...overlay,
	}),
	content: () => ({
		position: 'relative',
		zIndex: 3,
	}),
	image: ({ columnSpacing }) => ({
		maxHeight: `calc(100vh - ${columnSpacing * 2}px)`,
		width: 'auto !important',
	}),
	prev: () => button('left'),
	next: () => button('right'),
	close: props => label(props, 'top'),
	count: props => label(props, 'bottom'),
}

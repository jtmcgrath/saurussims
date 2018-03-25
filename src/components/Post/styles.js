import { padding } from 'polished'

import { listItem } from 'utils/styling'

import commonStyles from '../PostList/styles'

const attributionPosition = {
	position: 'absolute',
	top: '100%',
}

const radius = 20

const speech = (props, position) => ({
	...listItem({ ...props, radius }),
	marginBottom: `calc(${props.columnSpacing}px + 1em)`,
	overflow: 'visible !important',
	position: 'relative',
	':after': {
		borderTop: '5px solid white',
		borderRight: `5px solid ${position === 'right' ? 'white' : 'transparent'}`,
		borderBottom: '5px solid transparent',
		borderLeft: `5px solid ${position === 'left' ? 'white' : 'transparent'}`,
		content: '""',
		display: 'block',
		[position]: `${
			props.itemPadding * 2 > radius ? props.itemPadding * 2 : radius
		}px`,
		...attributionPosition,
	},
	'> span': {
		[position]: `${props.itemPadding}px`,
	},
	'> a': {
		[position]: `${props.itemPadding}px`,
	},
})

export default {
	...commonStyles,
	extraPadded: () => ({
		...padding('20px !important'),
	}),
	fixed: ({ columnSpacing, columnWidth, isDesktop }) =>
		isDesktop
			? {
					right: `${columnSpacing / 2}px`,
					position: 'fixed',
					top: 0,
					width: `${columnWidth - columnSpacing}px`,
					[`@media (min-width: ${columnWidth * 4}px)`]: {
						left: '50%',
						right: 'auto',
						transform: `translateX(${columnWidth - columnSpacing / 2}px)`,
					},
				}
			: {},
	questionItem: props => ({
		...listItem(props),
		background: 'rgba(255,255,255,.3) !important',
	}),
	answer: props => speech(props, 'left'),
	question: props => speech(props, 'right'),
	attribution: ({ columnSpacing }) => ({
		lineHeight: `${columnSpacing + 20}px`,
		...attributionPosition,
	}),
	wcif: () => ({
		'>figure': {
			marginBottom: 0,
		},
		'>:not(figure)': {
			display: 'none',
		},
	}),
}

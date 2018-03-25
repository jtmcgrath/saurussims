import { padding } from 'polished'

import { listItem, invert } from 'utils/styling'
import { capitalize } from 'utils/general'

import commonStyles from '../PostList/styles'

const attributionPosition = {
	position: 'absolute',
	top: '100%',
}

const radius = 20

const speaker = (props, position) => ({
	':after': {
		borderTop: '5px solid white',
		borderBottom: '5px solid transparent',
		content: '""',
		display: 'block',
		transform:
			position === 'right'
				? 'rotate(11deg) translate(0,-4px) scale(2)'
				: 'rotate(-11deg) translate(0,-4px) scale(2)',
		[`border${capitalize(position)}`]: '5px solid white',
		[`border${capitalize(invert(position))}`]: '5px solid transparent',
		[position]: `${
			props.itemPadding * 2 > radius
				? props.itemPadding * 3
				: radius + props.itemPadding
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

const speech = (props, position) => ({
	...listItem({ ...props, radius }),
	...padding(`${radius}px !important`),
	marginBottom: `calc(${props.columnSpacing}px + 1em)`,
	overflow: 'visible !important',
	position: 'relative',
	...(position ? speaker(props, position) : {}),
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
	text: props => speech(props),
}

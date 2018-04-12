import { margin, padding } from 'polished'

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
	'> a > span': {
		[position]: `${props.itemPadding}px`,
	},
})

const speech = (props, position) => ({
	...(position ? speaker(props, position) : {}),
	...listItem({ ...props, radius }),
	marginBottom: `calc(${props.columnSpacing}px + 1em)`,
	overflow: 'visible !important',
	position: 'relative',
})

export default {
	...commonStyles,
	marginOnly: ({ columnSpacing }) =>
		margin(`${columnSpacing}px`, `${columnSpacing / 2}px`),
	extraPadded: () => padding('20px !important'),
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
	speechPadding: () => padding(`${radius}px !important`),
	attribution: ({ columnSpacing }) => ({
		...attributionPosition,
		lineHeight: `${columnSpacing + 20}px`,
	}),
	wcif: () => ({
		'>figure': {
			marginBottom: 0,
		},
		'>:not(:first-child)': {
			display: 'none',
		},
		'>a>div>figure': {
			marginBottom: 0,
		},
		'>a>div>:not(:first-child)': {
			display: 'none',
		},
	}),
	text: props => speech(props),
	paddingBottom: () => ({
		paddingBottom: '1em',
	}),

	// Styles for the like button
	link: () => ({
		cursor: 'pointer',
		display: 'inline-block',
		flex: '1 1 100%',
		position: 'relative',
		textAlign: 'center',
		textDecoration: 'none',
		'>.like_button.liked + svg': {
			fill: '#919191',
		},
	}),
	linkIcon: () => ({
		height: '12px',
	}),
	iframe: () => ({
		bottom: 0,
		cursor: 'pointer',
		height: '100%',
		left: 0,
		opacity: 0,
		position: 'absolute',
		right: 0,
		top: 0,
		width: '100%',
		zIndex: 2,
	}),
	// End styles for the like button
}

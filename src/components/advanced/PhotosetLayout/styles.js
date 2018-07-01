import { margin } from 'polished'

export default {
	row: ({ itemPadding }) => ({
		...margin(0, 0, `${itemPadding}px`),
		alignItems: 'center',
		display: 'flex',
		':last-child': {
			marginBottom: 0,
		},
	}),
	button: ({ itemPadding }) => ({
		...margin(0, `${itemPadding / 2}px`),
		':first-child': {
			marginLeft: 0,
		},
		':last-child': {
			marginRight: 0,
		},
	}),
}

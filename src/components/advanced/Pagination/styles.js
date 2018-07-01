import { margin, padding } from 'polished'

export default {
	nav: () => ({
		display: 'flex',
		overflowX: 'auto',
	}),
	wrapper: ({ columnSpacing }) => ({
		...margin(0, 'auto', `${columnSpacing}px`),
		alignItems: 'center',
		display: 'flex',
		justifyContent: 'center',
	}),
	item: () => ({
		...margin(0, '4px'),
		...padding(0, '12px'),
		display: 'flex',
		lineHeight: '48px',
		textDecoration: 'none',
		'&.active': {
			background: 'white',
			borderRadius: '6px',
			lineHeight: '34px',
			opacity: '.5',
		},
	}),
}

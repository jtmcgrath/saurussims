import { padding } from 'polished'

export default {
	header: () => ({}),
	float: ({ columnWidth, isDesktop }) =>
		isDesktop
			? {
					bottom: 0,
					position: 'fixed',
					top: 0,
					width: `${columnWidth}px`,
				}
			: {},
	content: ({ columnSpacing }) => ({
		display: 'block',
		textAlign: 'center',
		textDecoration: 'none',
		width: '100%',
		...padding(`${columnSpacing}px`, `${columnSpacing / 2}px`, 0),
		'&.active': {
			opacity: 1,
		},
	}),
	avatar: ({ columnSpacing }) => ({
		paddingBottom: `${columnSpacing / 2}px`,
	}),
}

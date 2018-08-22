import { padding } from 'polished'

export default {
	header: () => ({}),
	float: ({ columnSpacing, columnWidth, isDesktop }) =>
		isDesktop
			? {
					bottom: 0,
					position: 'fixed',
					paddingLeft: `${columnSpacing}px`,
					top: 0,
					width: `${columnWidth}px`,
			  }
			: {},
	content: ({ columnSpacing }) => ({
		...padding(`${columnSpacing}px`, `${columnSpacing / 2}px`, 0),
		display: 'block',
		textAlign: 'center',
		textDecoration: 'none',
		width: '100%',
		'&.active': {
			opacity: 1,
		},
	}),
	avatar: ({ avatar, columnSpacing }) => ({
		marginBottom: `${columnSpacing / 2}px`,
		verticalAlign: 'bottom',
		width: avatar.size,
	}),
}

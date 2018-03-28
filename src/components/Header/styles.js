import { padding } from 'polished'

import { borderRadius } from 'utils/styling'

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
		marginBottom: `${columnSpacing / 2}px`,
		verticalAlign: 'bottom',
		width: '128px',
	}),
}

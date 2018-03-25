import { padding } from 'polished'

import { borderRadius } from 'utils/styling'

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
		border: '2px solid white',
		marginBottom: `${columnSpacing / 2}px`,
		verticalAlign: 'bottom',
		width: '128px',
		...borderRadius('50%'),
	}),
}

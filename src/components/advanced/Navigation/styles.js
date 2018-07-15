import { margin, padding } from 'polished'

export default {
	nav: ({ background, columnSpacing, columnWidth, isDesktop }) =>
		isDesktop
			? {
					paddingTop: `${columnSpacing}px`,
				}
			: {
					background: 'rgba(255,255,255,.9)',
					bottom: 0,
					left: 0,
					position: 'fixed',
					right: 0,
				},
	list: ({ columnSpacing, isDesktop }) => ({
		...margin(0, 'auto'),
		...padding(0, 0, isDesktop ? `${columnSpacing}px` : 0),
		display: 'flex',
		justifyContent: 'center',
		lineHeight: '48px',
		listStyle: 'none',
		maxWidth: '400px',
	}),
	listItem: ({ isDesktop }) => ({
		...padding(0, isDesktop ? '2px' : '12px'),
		alignItems: 'center',
		display: 'flex',
		flex: '0 1 25%',
		justifyContent: 'center',
	}),
	main: ({ isDesktop }) => ({
		flexDirection: isDesktop ? 'row-reverse' : 'row',
	}),
	secondary: ({ isDesktop, visible }) =>
		isDesktop
			? {}
			: {
					bottom: '100%',
					height: visible ? 'calc(100vh - 48px)' : 0,
					left: 0,
					overflow: 'hidden',
					position: 'absolute',
					right: 0,
					transition: '.4s ease all',
					'::before': {
						background: 'rgba(255,255,255,.9)',
						bottom: '48px',
						content: '""',
						display: 'block',
						height: 'inherit',
						left: 0,
						position: 'fixed',
						right: 0,
						zIndex: -1,
					},
				},
	link: () => ({
		cursor: 'pointer',
		display: 'block',
		flex: '1 1 100%',
		textAlign: 'center',
		textDecoration: 'none',
	}),
	linkIcon: () => ({
		...margin('4px', 'auto'),
		display: 'block',
	}),
	linkText: () => ({
		...margin('4px'),
		display: 'block',
		fontSize: '12px',
		lineHeight: '12px',
	}),
	hideOnDesktop: ({ isDesktop }) => ({
		display: isDesktop ? 'none !important' : null,
	}),
}
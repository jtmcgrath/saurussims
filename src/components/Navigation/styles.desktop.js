import { padding } from 'polished'

export default {
	nav: ({ columnSpacing }) => ({
		paddingTop: `${columnSpacing}px`,
	}),
	content: () => ({}),
	list: () => ({
		lineHeight: '44px',
		listStyle: 'none',
		margin: 0,
		padding: 0,
	}),
	listItem: () => ({
		alignItems: 'center',
		display: 'flex',
		flex: '1 1 100%',
		justifyContent: 'center',
		...padding(0, '12px'),
	}),
	main: () => ({}),
	secondary: () => ({}),
	link: () => ({
		alignItems: 'center',
		cursor: 'pointer',
		display: 'flex',
		flex: '1 1 100%',
		justifyContent: 'center',
		textDecoration: 'none',
	}),
	hideOnDesktop: () => ({
		display: 'none !important',
	}),
}

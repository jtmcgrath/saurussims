import { padding } from 'polished'

export default {
	nav: ({ columnWidth }) => ({
		flex: `0 0 ${columnWidth}px`,
	}),
	content: ({ columnWidth }) => ({
		bottom: 0,
		position: 'fixed',
		top: 0,
		width: `${columnWidth}px`,
	}),
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
}

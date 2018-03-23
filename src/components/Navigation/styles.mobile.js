import { padding } from 'polished'

export default {
	nav: ({ background, columnWidth }) => ({
		background: 'rgba(255,255,255,.9)',
		bottom: 0,
		left: 0,
		position: 'fixed',
		right: 0,
	}),
	list: () => ({
		display: 'flex',
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
	secondary: ({ visible }) => ({
		background: 'rgba(255,255,255,.9)',
		bottom: '100%',
		height: visible ? 'calc(100vh - 44px)' : 0,
		left: 0,
		overflow: 'hidden',
		position: 'absolute',
		right: 0,
		transition: '.4s ease all',
	}),
	link: () => ({
		alignItems: 'center',
		cursor: 'pointer',
		display: 'flex',
		flex: '1 1 100%',
		justifyContent: 'center',
		textDecoration: 'none',
	}),
}

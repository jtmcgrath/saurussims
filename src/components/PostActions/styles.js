import { margin, padding } from 'polished'

export default {
	postActions: () => ({
		background: 'rgba(255,255,255,.9)',
		display: 'flex',
		lineHeight: '48px',
		listStyle: 'none',
		justifyContent: 'center',
		...padding(0),
		...margin(0, 'auto'),
	}),
	item: () => ({
		...margin(0, '8px'),
	}),
	link: () => ({
		cursor: 'pointer',
		display: 'block',
		flex: '1 1 100%',
		textAlign: 'center',
		textDecoration: 'none',
	}),
	linkIcon: () => ({
		display: 'block',
		lineHeight: '24px',
		...margin('4px', 'auto'),
	}),
	linkText: () => ({
		display: 'block',
		fontSize: '12px',
		lineHeight: '12px',
		...margin('4px'),
	}),
	separator: () => ({
		display: 'block',
		width: '24px',
	}),
}

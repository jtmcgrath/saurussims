import { margin, padding } from 'polished'

export default {
	postActions: () => ({
		...margin(0, 'auto'),
		...padding(0),
		background: 'rgba(255,255,255,.9)',
		display: 'flex',
		lineHeight: '48px',
		listStyle: 'none',
		justifyContent: 'center',
	}),
	item: () => margin(0, '8px'),
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
		lineHeight: '24px',
	}),
	linkText: () => ({
		...margin('4px'),
		display: 'block',
		fontSize: '12px',
		lineHeight: '12px',
	}),
	separator: () => ({
		display: 'block',
		width: '24px',
	}),
}

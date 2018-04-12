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
		color: '#919191',
		cursor: 'pointer',
		display: 'block',
		flex: '1 1 100%',
		position: 'relative',
		textAlign: 'center',
		textDecoration: 'none',
		'>.like_button.liked + svg': {
			fill: '#919191',
		},
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
	iframe: () => ({
		bottom: 0,
		cursor: 'pointer',
		height: '100%',
		left: 0,
		opacity: 0,
		position: 'absolute',
		right: 0,
		top: 0,
		width: '100%',
		zIndex: 2,
	}),
	separator: () => ({
		display: 'block',
		width: '24px',
	}),
}

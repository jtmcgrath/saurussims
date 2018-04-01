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
		textAlign: 'center',
		textDecoration: 'none',
	}),
	linkIcon: () => ({
		...margin('4px', 'auto'),
		display: 'block',
		lineHeight: '24px',
	}),
	heartIcon: ({ liked }) => ({
		fill: liked && '#919191',
	}),
	linkText: () => ({
		...margin('4px'),
		display: 'block',
		fontSize: '12px',
		lineHeight: '12px',
	}),
	iframe: () => ({
		height: '1px',
		position: 'absolute',
		width: '1px',
	}),
	separator: () => ({
		display: 'block',
		width: '24px',
	}),
}

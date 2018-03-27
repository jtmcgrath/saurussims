import { margin, padding } from 'polished'

export default {
	wrapper: ({ columnSpacing }) => ({
		display: 'flex',
		justifyContent: 'center',
		...margin(0, `${columnSpacing}px`, `${columnSpacing}px`),
	}),
	item: () => ({
		display: 'flex',
		lineHeight: '48px',
		...margin(0, '4px'),
		...padding(0, '12px'),
	}),
}

import { margin, padding } from 'polished'

export default {
	wrapper: ({ columnSpacing }) => ({
		...margin(0, `${columnSpacing}px`, `${columnSpacing}px`),
		display: 'flex',
		justifyContent: 'center',
	}),
	item: () => ({
		...margin(0, '4px'),
		...padding(0, '12px'),
		display: 'flex',
		lineHeight: '48px',
	}),
}

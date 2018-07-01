import { padding } from 'polished'

export default {
	wrapper: ({ columnCount, columnSpacing, isDesktop }) => ({
		...padding(`${columnSpacing / 2}px`),
		marginBottom: columnCount < 2 && '0 !important',
		textAlign: isDesktop ? 'left' : 'center',
	}),
}

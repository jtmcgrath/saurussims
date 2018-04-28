import { padding } from 'polished'

import { borderRadius } from 'utils/styling'

export default {
	wrapper: ({ columnCount, columnSpacing, isDesktop }) => ({
		...padding(`${columnSpacing / 2}px`),
		marginBottom: columnCount < 2 && '0 !important',
		textAlign: isDesktop ? 'left' : 'center',
	}),
}

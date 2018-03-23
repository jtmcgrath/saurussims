import { padding } from 'polished'

import commonStyles from '../PostList/styles'

export default {
	...commonStyles,
	extraPadded: () => ({
		...padding('20px !important'),
	}),
	fixed: ({ columnSpacing, columnWidth, isDesktop }) =>
		isDesktop
			? {
					right: `${columnSpacing / 2}px`,
					position: 'fixed',
					top: 0,
					width: `${columnWidth - columnSpacing}px`,
				}
			: {},
}

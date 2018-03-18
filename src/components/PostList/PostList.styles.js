import { margin, padding } from 'polished'
import { borderRadius } from 'utils/styling'

export default {
	wrapper: ({ columnSpacing }) => ({
		alignItems: 'flex-start',
		display: 'flex',
		...padding(0, `${columnSpacing / 2}px`),
		justifyContent: 'space-around',
	}),
	column: ({ columnCount, columnSpacing, columnWidth, isDesktop }) => {
		const gutterSpace = (columnCount + (isDesktop ? 0 : 1)) * columnSpacing
		const reservedSpace = gutterSpace + (isDesktop ? columnWidth : 0)
		return {
			flex: `0 1 calc(100% - ${columnSpacing}px)`,
			overflowX: 'hidden',
			'@media (min-width: 320px)': {
				flex: `0 1 calc((100vw - ${reservedSpace}px) / ${columnCount})`,
			},
		}
	},
	listItem: ({ columnSpacing }) => ({
		background: 'white',
		display: 'block',
		overflow: 'hidden',
		padding: '6px',
		...borderRadius('4px'),
		...margin(`${columnSpacing}px`, 0),
	}),
}

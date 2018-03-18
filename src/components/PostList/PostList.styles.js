import { margin, padding } from 'polished'
import { borderRadius } from 'utils/styling'

export default {
	wrapper: ({ columnSpacing }) => ({
		alignItems: 'flex-start',
		display: 'flex',
		...padding(0, `${columnSpacing / 2}px`),
		justifyContent: 'space-around',
	}),
	column: ({ columnCount, columnSpacing }) => ({
		flex: `0 1 calc((100vw - ${(columnCount + 1) *
			columnSpacing}px) / ${columnCount})`,
		overflowX: 'hidden',
	}),
	listItem: ({ columnSpacing }) => ({
		background: 'white',
		display: 'block',
		overflow: 'hidden',
		padding: '6px',
		...borderRadius('4px'),
		...margin(`${columnSpacing}px`, 0),
	}),
}

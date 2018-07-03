import { padding } from 'polished'

import { listItem, listItemPadding } from 'utils/styling'

export default {
	wrapper: ({ columnSpacing }) => ({
		...padding(0, `${columnSpacing / 2}px`),
		alignItems: 'flex-start',
		display: 'flex',
		justifyContent: 'space-around',
	}),
	responsiveWrapper: ({ columnCount }) => ({
		display: columnCount > 1 ? 'flex' : 'block !important',
	}),
	column: ({ columnCount, columnSpacing, columnWidth }) => ({
		flex: `0 1 calc(100% - ${columnSpacing}px)`,
		overflow: 'hidden',
		'@media (min-width: 320px)': {
			flex: `0 1 calc(100vw / ${columnCount})`,
		},
	}),
	wide: ({ columnCount, columnSpacing }) => ({
		flex: '1 1 100%',
		marginBottom: columnCount < 2 && '0 !important',
	}),
	narrow: ({ columnWidth }) => ({
		flex: `0 0 ${columnWidth}px`,
		overflow: 'hidden',
	}),
	listItem: listItem,
	listItemPadding: listItemPadding,
	link: ({ columnSpacing }) => ({
		display: 'block',
		textDecoration: 'none',
	}),
	postActions: () => ({
		position: 'relative',
		'>.post-actions': {
			bottom: 0,
			display: 'flex',
			left: 0,
			height: 0,
			overflow: 'hidden',
			position: 'absolute',
			right: 0,
			transition: '.5s ease all',
		},
		':hover>.post-actions': {
			height: '48px',
		},
	}),
}

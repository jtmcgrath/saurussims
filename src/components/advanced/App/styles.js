export default {
	root: ({ isDesktop }) => ({
		display: isDesktop ? 'flex' : 'block',
		justifyContent: 'center',
		overflow: 'hidden',
		paddingBottom: !isDesktop ? '48px' : null,
	}),
	header: ({ columnWidth }) => ({
		flex: `0 0 ${columnWidth}px`,
		position: 'relative',
		zIndex: 2,
	}),
	content: ({ columnCount, columnWidth }) => ({
		flex: columnCount > 1 ? `1 0 calc(100vw - ${columnWidth}px)` : '1 0 100%',
		maxWidth: columnCount > 4 ? '100%' : `${columnWidth * 3}px`,
	}),
}

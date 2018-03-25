export default {
	root: ({ isDesktop }) => ({
		display: isDesktop ? 'flex' : 'block',
		justifyContent: 'center',
		paddingBottom: !isDesktop ? '44px' : null,
	}),
	header: ({ columnWidth }) => ({
		flex: `0 0 ${columnWidth}px`,
		position: 'relative',
		zIndex: 2,
	}),
	content: ({ columnWidth }) => ({
		flex: '1 0 100%',
		'@media (min-width: 320px)': {
			flex: `1 0 calc(100vw - ${columnWidth}px)`,
		},
		[`@media (min-width: ${columnWidth * 4}px)`]: {
			maxWidth: `${columnWidth * 3}px`,
		},
	}),
}

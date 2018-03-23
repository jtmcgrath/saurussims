export default {
	root: ({ isDesktop }) => ({
		display: isDesktop ? 'flex' : 'block',
		paddingBottom: !isDesktop && '44px',
	}),
	header: ({ columnWidth }) => ({
		flex: `0 0 ${columnWidth}px`,
	}),
	content: ({ columnWidth }) => ({
		flex: '1 0 100%',
		overflowX: 'hidden',
		'@media (min-width: 320px)': {
			flex: `1 0 calc(100vw - ${columnWidth}px)`,
		},
	}),
}

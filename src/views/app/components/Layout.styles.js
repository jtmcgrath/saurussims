import styled from 'styled-components'

const calculateColumns = ({ columnSpacing, columnWidth }, columns) =>
	(columnSpacing + columnWidth) * columns - columnSpacing

export default styled.div(
	({ theme }) => `
	${
		theme.isDesktop
			? `
		display: flex;

		.header {
			width: ${theme.columnWidth}px;
		}
	`
			: ''
	}

	margin: 0 auto;
	max-width: ${calculateColumns(theme, theme.maxColumns)}px;
	min-height: 100vh;
	padding: ${theme.columnSpacing / 2}px;

	html:not(&) {
		background: ${theme.background};

		img + img,
		article button + button {
			margin-top: ${window.config.itemPadding}px;
		}
	}
`
)

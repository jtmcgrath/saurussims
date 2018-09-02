import styled from 'styled-components'

export default styled.article(
	({ theme }) => `
	background: white;
	border-radius: 4px;
	margin: ${theme.columnSpacing / 2}px;
	padding: ${theme.itemPadding}px;

    img:only-child {
        width: 100%;
    }
`
)

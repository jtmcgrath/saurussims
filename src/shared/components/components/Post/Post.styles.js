import styled from 'styled-components'

export default styled.article`
	background: white;
	border-radius: 4px;
	margin: ${props => props.theme.columnSpacing / 2}px;
	padding: ${props => props.theme.itemPadding}px;

    img:only-child {
        width: 100%;
    }
`

import styled from 'styled-components'
import { padding } from 'polished'

export default styled.a`
	${props =>
		padding(
			`${props.theme.columnSpacing}px`,
			`${props.theme.columnSpacing / 2}px`,
			0
		)}
	align-items: center;
	display: flex;
	flex-direction: column;
	font-weight: bold;
	text-align: center;
	text-decoration: none;

	img {
		margin-bottom: ${props => props.theme.columnSpacing / 2}px;
		vertical-align: bottom;
		width: ${props => props.theme.account.avatar.size};
	}

	h4 {
		line-height: 1.3;
	}
`

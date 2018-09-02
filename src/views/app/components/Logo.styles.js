import styled from 'styled-components'

import { padding } from 'shared/utils'

export default styled.a(
	({ theme }) => `
	${padding(`${theme.columnSpacing / 2}px`, `${theme.columnSpacing / 2}px`, 0)}
	align-items: center;
	display: flex;
	flex-direction: column;
	font-weight: bold;
	text-align: center;
	text-decoration: none;

	img {
		margin-bottom: ${theme.columnSpacing / 2}px;
		vertical-align: bottom;
		width: ${theme.account.avatar.size};
	}

	h4 {
		line-height: 1.3;
	}
`
)

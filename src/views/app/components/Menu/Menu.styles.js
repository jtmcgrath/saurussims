import styled from 'styled-components'
import { padding } from 'polished'

export default styled.menu`
	.menu-item {
		${props =>
			padding(
				0,
				props.theme.isDesktop ? '2px' : '12px'
			)}
        align-items: center;
		display: flex;
		flex: 0 1 25%;
		justify-content: center;
	}
`

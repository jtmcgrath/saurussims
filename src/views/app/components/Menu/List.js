import styled from 'styled-components'
import { margin, padding } from 'polished'

import { List } from 'shared/components'

export default styled(List)`
	${margin(0, 'auto')}
    ${props =>
		padding(
			0,
			0,
			props.theme.isDesktop ? `${props.theme.columnSpacing}px` : 0
		)}

    display: flex;
    justify-content: center;
    line-height: 48px;
    max-width: 400px;
`

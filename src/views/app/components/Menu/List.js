import styled from 'styled-components'

import { margin, padding } from 'shared/utils'
import { List } from 'shared/components'

export default styled(List)(
	({ theme }) => `
	${margin(0, 'auto')}
    ${padding(0, 0, theme.isDesktop ? `${theme.columnSpacing}px` : 0)}

    display: flex;
    justify-content: center;
    line-height: 48px;
    max-width: 400px;
`
)

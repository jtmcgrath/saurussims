import styled from 'styled-components'

import { margin } from 'shared/utils'

export default styled.div(
	({ theme }) => `
        ${margin(0, 0, `${theme.itemPadding}px`)}
        align-items: center;
        display: flex;

        :last-child {
            margin-bottom: 0;
        }
    `
)

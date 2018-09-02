import styled from 'styled-components'

import { margin } from 'shared/utils'

export default styled.button(
	({ theme }) => `
    ${margin(0, `${theme.itemPadding / 2}px`)}

    :first-child {
        margin-left: 0;
    }

    :last-child {
        margin-right: 0;
    }
`
)

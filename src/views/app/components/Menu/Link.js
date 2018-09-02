import styled from 'styled-components'

import { margin } from 'shared/utils'
import { Link } from 'shared/components'

export default styled(Link)`
	cursor: pointer;
    display: block;
	flex: 1 1 100%;
	text-align: center;
	text-decoration: none;

	svg {
		${margin('4px', 'auto')}
        display: block;
	}

	span {
		${margin('4px')}
        display: block;
		font-size: 12px;
		line-height: 12px;
	}
`

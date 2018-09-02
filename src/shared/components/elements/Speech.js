import styled from 'styled-components'

import { invert } from 'shared/utils'

const radius = 20

export default styled.div(
	({ position, theme }) => `
    ${position &&
		`
        :after {
            border-top: 5px solid white;
            border-bottom: 5px solid transparent;
            content: '';
            display: block;
            transform: ${
				position === 'right'
					? 'rotate(11deg) translate(0,-4px) scale(2)'
					: 'rotate(-11deg) translate(0,-4px) scale(2)'
			};
            border-${position}: 5px solid white;
            border-${invert(position)}: 5px solid transparent;
            ${position}: ${
			theme.itemPadding * 2 > radius
				? theme.itemPadding * 3
				: radius + theme.itemPadding
		}px;
            position: absolute;
            top: 100%;
        }
    `}
    > span,
    > a,
    > a > span {
        ${position}: ${theme.itemPadding}px;
    }
`
)

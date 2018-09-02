import styled from 'styled-components'

export default styled.header(
	({ theme }) => `
    position: relative;
    z-index: 2;

    ${theme.isDesktop &&
		`
        flex: 0 0 ${theme.columnWidth}px;
        max-height: 100vh;
        position: sticky;
        top: 0;
    `}
`
)

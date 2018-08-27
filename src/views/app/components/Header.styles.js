import styled from 'styled-components'

export default styled.header`
    position: relative;
    z-index: 2;

    ${props => props.theme.isDesktop && `
        flex: 0 0 ${props.theme.columnWidth}px;
        max-height: 100vh;
        position: sticky;
        top: 0;
    `}
`

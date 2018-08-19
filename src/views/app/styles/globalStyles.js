import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

const injectGlobalStyles = () => injectGlobal`
    ${reset}

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        min-width: 320px;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    body,
    button,
    input {
        font-family: Ubuntu, Helvetica, Arial, sans-serif;
        font-size: 1.6rem;
        outline: none;
    }
`

export default injectGlobalStyles

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
        font-family: "Alegreya Sans", Helvetica, sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    h1, h2, h3, h4, h5, h6, button {
        font-family: "Amatic SC", Helvetica, sans-serif;
    }
`

export default injectGlobalStyles

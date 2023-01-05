import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px #C4C4CC;
    }
    body {
        background: #121214;
        color: #C4C4CC;
        -webkit-font-smoothing: antialiased;
        max-width: 1160px;
        margin: 0 auto;
    }
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
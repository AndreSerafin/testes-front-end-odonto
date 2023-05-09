import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.background};
        display: flex;
        flex-direction: column;
    }

    body, button, input, h1, h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1rem
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
     transition: background-color 5000s ease-in-out 0s;
     -webkit-text-fill-color: ${(props) =>
       props.theme['font-color']} !important;
    }
`

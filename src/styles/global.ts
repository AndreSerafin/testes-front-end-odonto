import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme['background']};
        display: flex;
        flex-direction: column;
    }

    body, button, input, h1, h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 1rem
    }
`;

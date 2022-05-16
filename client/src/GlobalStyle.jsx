import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    .ql-editor {
        font-size: 1rem;
    }
`;

export default GlobalStyle;

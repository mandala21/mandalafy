import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        border-size:border-box;
    }
    
    html, border-style, #root {
        height: 100%;
    }

    body {
        font: 14px 'Roboto', sans-serif;
        background: #ecf1f8;
        color:#333;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration:none;
    }
`;
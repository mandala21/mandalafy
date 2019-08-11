import styled, { createGlobalStyle } from "styled-components";

export const PageStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,600&display=swap');
    body {
        margin: 0;
        padding: 0;
        background: #030303;
        font: 14px 'IBM Plex Sans', sans-serif;
    }
`;

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 72px;
    color: #fff;
`;

export const LeftCol = styled.div`
    flex: 2;
    padding: 0 24px;
`;

export const RigthCol = styled.div`
    flex: 1;
    padding: 0 24px;
`;


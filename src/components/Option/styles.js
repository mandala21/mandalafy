import styled from "styled-components";

export const Container = styled.div`
    border-color: ${props =>  props.bgColor};
    border-width: 4px;
    border-style: solid;
    padding: 16px 24px;
    font-size: 24px;
    color: ${props =>  props.textColor};
    text-align: center;
    margin:auto;
    width:75%;
    position:relative;
    margin-top:32px;

    a {
        text-decoration: none;
    }

    a:active {
        text-decoration: none;
        color: ${props =>  props.textColor};
    }
`;
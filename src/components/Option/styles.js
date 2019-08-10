import styled from "styled-components";


export const Container = styled.div`
    border-color: ${props => props.color};
    border-width: 4px;
    border-style: solid;
    padding: 16px 24px;
    font-size: 24px;
    text-align: center;
    margin:auto;
    width:75%;
    position:relative;
    margin-top:32px;
    color: ${props => props.color};
    transition: all .25s ease;

    &:hover{
        font-size: 36px;
    }

`;

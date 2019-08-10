import styled from "styled-components";
import HomeIcon from "../../assets/home-icon.svg";


export const Container = styled.div`
    display: flex;
    align-items: center;
    background:#1A1A1B;
    height: 48px;
    padding: 0 20px;
    border-bottom: 0.5px solid rgb(215, 218, 220, .4);
    position: fixed;
    top:0;
    left: 0;
    width: 100%; 
`;

export const ContainerSearchInput = styled.div`
    padding: 0 16px ;
    border: 0.5px solid rgb(215, 218, 220, .1);
    border-radius: 6px;
    height: 70%;
    display: flex;
    align-items: center;
    background:rgba(215,218,220,0.1);
    margin-left: 16px;

    &:hover {
        background:#1A1A1B;
        border: 1px solid  rgba(215,218,220,0.4);
    }
`;

export const SearchInput = styled.input`
    color: #D7DADC;
    border:0;
    background:transparent;
    font-size: 14px;
    width: 250px;
    margin-left: 4px;

    &:focus {
        outline: none;
    }
`;

export const ConatinerSelectInput = styled.div`
    padding: 0 4px ;
    border-radius: 6px;
    display: flex;
    align-items: center;
    margin-left: ${props=> props.mgLf ? props.mgLf : '16px' };
    height: 70%;
    border: 1px solid transparent;

    &:hover {
        border: 1px solid  rgba(215,218,220,0.4);
        border-radius: 4px;
    }

    &:focus {
        outline: none;
    }
`;

export const SelectInput = styled.select`
    width: 250px;
    background:transparent;
    color: #D7DADC;
    margin-left: 6px;
    border:0;
    font-weight: 600;

`;

export const IconSelect = styled.div`
    width: 22px;
    height: 22px;
    background-color: #0079d3;
    -webkit-mask-image: url(${HomeIcon});
    mask-image: url(${HomeIcon});
`;

export const ContainerNavIcon = styled.div`
    margin-left: 16px;
    display: flex;
    border-right: 0.5px solid rgb(215, 218, 220, .4);
    padding-right: 16px;
`;

export const ButtonIcon = styled.div`
    padding: 8px;
    border-radius: 4px;
    margin-left: 8px;

    &:hover {
        background:#2D2D2E;
    }
`;

export const UserAvatar = styled.div `
    background-image: url("${props => props.photo}");
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 8px;
`;



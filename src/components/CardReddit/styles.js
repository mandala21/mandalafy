import styled from "styled-components";

export const Container = styled.div`
    width:100%;
    background:#1A1A1B;
    border: 0.5px solid rgb(215, 218, 220, .1);
    border-radius: 4px;
    position:relative;
    margin-bottom: 16px;


    &:hover {
        border: 0.5px solid rgba(215,218,220,0.6);
    }
`;

export const LeftContent = styled.div`
    width:40px;
    height: 99.9%;
    background: #161617;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    position:absolute;
`;

export const VoteGroup = styled.div`
    margin-top: 8px;
    display:flex;
    flex-direction: column;
    align-items: center;

    .up, .down {
        padding:4px;
        border-radius: 4px;
    }

    .up:hover {
        color: #CC3700;
        background: rgba(215,218,220,0.1);
    }

    .down:hover {
        background: rgba(215,218,220,0.1);
        color: #5A75CC;
    }
`;

export const RigthContent = styled.div`
    padding: 8px 4px;
    margin-left:42px;
`;

export const HeaderCard = styled.div`
    display:flex;
    flex-direction:row;
`;

export const TextHeader = styled.span`
    margin-top: 6px;
    font-size: 12px;
    color: ${props => props.color ? props.color : '#D7DADC'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : '#D7DADC'};
`;

export const HeaderTitleContent = styled.div`
    margin-left: 4px;
`;

export const TitleContentCard = styled.span`
    font-size: 18px;
    font-weight: 600;
`;

export const ContentCard = styled.div`
    margin-left: 8px;
    margin-top: 8px;
`;

export const TextContentCard = styled.div`
    margin-top: 8px;
    max-height: 250px;
`;
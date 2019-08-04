import styled from "styled-components";

const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 240px;
    opacity: ${props => props.done ? 0.6 : 1};

    & + div {
        border-left: 1px solid rgba(0,0,0,0.1);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 24px;
        
        h2 {
            font-weight: 500;
            font-size: 16px;
            padding: 0 10px;
        }

        button {
            height: 36px;
            width: 36px;
            border:0;
            background: #3b53fb;
            border-radius: 12px;
            cursor: pointer;
        }
    }

    ul {
        margin-top: 14px;
    }
`;

export default Container;
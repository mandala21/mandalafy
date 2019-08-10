import styled from "styled-components";
import TrendUpSvg from "../../assets/navicon-trendup.svg";
import AllSvg from "../../assets/navicon-all.svg";
import OCSvg from "../../assets/navicon-oc.svg";
 
export const TrendUpIcon = styled.div`
    width: 16px;
    height: 16px;
    display: block;
    background-color: #D7DADC;
    -webkit-mask-image: url(${TrendUpSvg});
    mask-image: url(${TrendUpSvg});
`;

export const AllIcon = styled.div`
    width: 16px;
    height: 16px;
    display: block;
    background-color: #D7DADC;
    -webkit-mask-image: url(${AllSvg});
    mask-image: url(${AllSvg});
`;

export const OCIcon = styled.div`
    width: 16px;
    height: 16px;
    display: block;
    background-color: #D7DADC;
    -webkit-mask-image: url(${OCSvg});
    mask-image: url(${OCSvg});
`;
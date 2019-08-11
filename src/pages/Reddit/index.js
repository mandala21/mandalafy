import React from "react";
import { PageStyle, Content, LeftCol, RigthCol } from "./styles";
import Header from "../../components/HeaderReddit";
import CardReddit from "../../components/CardReddit";


export default function Reddit(){
    return (
        <>
            <Header />
            <Content>
                <LeftCol>
                    <CardReddit />
                    <CardReddit />
                    <CardReddit />
                </LeftCol>
                <RigthCol>
                    <span>Hello World</span>
                </RigthCol>
            </Content>
            <PageStyle />
        </>
    );
}
import React from "react";
import GlobalStyles from "../../styles/global";
import { Label } from "./styles";
import Option from "../../components/Option";

export default function Home(){
    return (
        <>
            <Label>Selecione um clone</Label>
            <Option to="pipefy" name="Pipefy" bgColor="#154" textColor="#154" />
            
            <GlobalStyles />
        </>
    );
}
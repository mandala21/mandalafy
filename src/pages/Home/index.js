import React from "react";
import GlobalStyles from "../../styles/global";
import { Label } from "./styles";
import Option from "../../components/Option";

export default function Home(){
    return (
        <>
            <Label>Selecione um clone</Label>
            <Option to="pipefy" name="Pipefy" color="#6EABCF" />
            <Option to="reddit" name="Reddit" color="#ff4500" />
            
            <GlobalStyles />
        </>
    );
}
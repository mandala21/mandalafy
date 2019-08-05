import React, { useState } from "react";

import { loadLists } from "../../services/api";

import Context from "./context";

import Container from "./styles";

import List from "../List";

const data = loadLists();

export default function Board(){
    const [lists, setLists] = useState(data);

    function move(from, to){

    }
    //cria um context para os cards poderem alterar os valores
    return (
        <Context.Provider value={{lists, move}}>
            <Container>
                {lists.map((list)=><List key={list.title} data={list} />)}
            </Container>
        </Context.Provider>
    );
}
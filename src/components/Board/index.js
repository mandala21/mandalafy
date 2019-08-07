import React, { useState } from "react";

import { loadLists } from "../../services/api";

import produce from "immer";

import Context from "./context";

import Container from "./styles";

import List from "../List";

const data = loadLists();

export default function Board(){
    const [lists, setLists] = useState(data);

    function move(from, to, fromList){
        setLists(produce(lists,draft => {
            const dragged = draft[fromList].cards[from];
            draft[fromList].cards.splice(from,1);
            draft[fromList].cards.splice(to,0, dragged);
        }));
    }
    //cria um context para os cards poderem alterar os valores
    return (
        <Context.Provider value={{lists, move}}>
            <Container>
                {lists.map((list,index)=><List index={index} key={list.title} data={list} />)}
            </Container>
        </Context.Provider>
    );
}
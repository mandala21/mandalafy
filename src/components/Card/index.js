import React, { useRef, useContext } from "react";

import { useDrag, useDrop } from "react-dnd";

import BoardContext from "../Board/context";

import {Container, Label } from "./styles";

export default function Card({data, index, listIndex}){
    //react nao pode duas ref entao eh usado para poder 
    //dar o dropRef
    const ref = useRef();
    //para pode alterar variaveis que estao fora do escopo do componente
    //recupera-se o context dela
    const {move} = useContext(BoardContext);

    //para poder fazer o drag
    const [{isDragging}, dragRef] = useDrag({
        item:{type:'CARD', index, listIndex},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    })

    //para pode dropar um card em cima dele
    const [,dropRef] = useDrop({
        accept: 'CARD',
        hover:function(item,monitor){
            const draggedIndex = item.index;
            const targetIndex = index;
            const draggedListIndex = item.listIndex;
            // const targgetListIndex = listItem;

            //ignora se tiver em cima dele
            if (draggedIndex==targetIndex){
                return;
            }
            //verifica se o card passou da metade do target
            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top)/2
            //pega o quanto do item arrastou
            const draggedOffSet = monitor.getClientOffset();
            //calcula quanto entrou dentro do outro (o o)
            const draggedTop = draggedOffSet.y - targetSize.top;
            //o elemento tem index maior do que o alvo e nao passou do centro
            //continua na mesma posicao
            if (draggedIndex < targetIndex && draggedTop < targetCenter){
                return;
            }
            // o mesmo se ele for menor e nao passar da metade do maior
            if (draggedIndex > targetIndex && draggedTop > targetCenter){
                return;
            }
            move(draggedIndex,targetIndex,draggedListIndex);

            //o objeto nao atualiza entao diz para ele que ele mudou de prosicao
            item.index = targetIndex;
        }
    });

    //agora as duas ref estao em uma
    //react nao deixa duas refs para dois elementos
    dragRef(dropRef(ref));
    

    return (
        <Container ref={ref} isDragging={isDragging}>
            <header>
                {data.labels.map((label)=><Label key={label} color={label} />)}
            </header>
            <p>{data.content}</p>
            { data.user && (<img src={data.user} />)}
        </Container>
    );
}
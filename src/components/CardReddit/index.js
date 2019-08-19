import React, { useState } from "react";

import { UserAvatar } from "../HeaderReddit/styles";

import {VoteGroup ,TextContentCard ,ContentCard ,TitleContentCard ,HeaderTitleContent ,TextHeader ,Container, LeftContent, RigthContent, HeaderCard} from "./styles";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function CardReddit(){
    const [vote, setVote] = useState(0);

    function upperVote(){
        setVote(vote+1);
    }

    function downVote(){
        setVote(vote-1);
    }
    
    return (
        <Container>
            <LeftContent>
                <VoteGroup>
                    <FaArrowUp className="up" onClick={upperVote} style={{cursor: 'pointer'}}></FaArrowUp>
                    <span>{vote}</span>
                    <FaArrowDown className="down" onClick={downVote} style={{cursor: 'pointer'}}></FaArrowDown>
                </VoteGroup>
            </LeftContent>
            <RigthContent>
                <HeaderCard>
                    <UserAvatar borderRadius="50%" photo="https://www.redditstatic.com/avatars/avatar_default_12_FFD635.png" />
                    <HeaderTitleContent>
                        <TextHeader color="#D7DADC" fontWeight="600">r/React </TextHeader>
                        <TextHeader color="rgba(215,218,220,0.3)" fontWeight="400"> . Posted by mandala 4 hours ago</TextHeader>
                    </HeaderTitleContent>
                </HeaderCard>
                <ContentCard>
                    <TitleContentCard>Brazil the best</TitleContentCard>
                    <TextContentCard>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </TextContentCard>
                </ContentCard>
            </RigthContent>
        </Container>
    );
}
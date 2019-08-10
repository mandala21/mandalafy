import React from "react";
import RedditLogo from "../../assets/reddit-logo.png";
import { MdSearch, MdTrendingUp } from "react-icons/md";

import { UserAvatar, ContainerNavIcon, ButtonIcon ,IconSelect, Container, ContainerSearchInput, SearchInput, SelectInput, ConatinerSelectInput } from "./styles";

import { ArrowDown ,TrendUpIcon, AllIcon, OCIcon, BallomIcon, MessageIcon, WriteIcon } from "./icons";
 
export default function HeaderReddit(){
    return (
        <Container>
            <img src={RedditLogo} width={32} height={32} />
            <ConatinerSelectInput>
                <IconSelect />
                <SelectInput >
                    <option>Home</option>
                </SelectInput>
            </ConatinerSelectInput>
            <ContainerSearchInput>
                <MdSearch size={24} color="#D7DADC" />
                <SearchInput placeholder="Search for reddit" />
            </ContainerSearchInput>
            <ContainerNavIcon>
                <a href="#">
                    <ButtonIcon >
                        <TrendUpIcon />
                    </ButtonIcon>
                </a>
                <a href="#">
                    <ButtonIcon >
                        <AllIcon />
                    </ButtonIcon>
                </a>
                <a href="#">
                    <ButtonIcon >
                        <OCIcon />
                    </ButtonIcon>
                </a>
            </ContainerNavIcon>
            <a href="#">
                <ButtonIcon >
                    <BallomIcon />
                </ButtonIcon>
            </a>
            <a href="#">
                <ButtonIcon >
                    <MessageIcon />
                </ButtonIcon>
            </a>
            <a href="#">
                <ButtonIcon >
                    <WriteIcon />
                </ButtonIcon>
            </a>

            <ConatinerSelectInput mgLf='8px'>
                <UserAvatar photo="https://www.redditstatic.com/avatars/avatar_default_12_FFD635.png"  />
                <ArrowDown />
            </ConatinerSelectInput>
        </Container>
    );
}
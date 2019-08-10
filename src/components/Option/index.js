import React from "react";
import { Link } from "react-router-dom";
import { Container, Style } from "./styles";

export default function Option({ to, name, color }) {
    return (
        <>
            <Link to={to}>
                <Container color={color}>
                    <span>{name}</span>
                </Container>
            </Link>
        </>
    );
}
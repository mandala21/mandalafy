import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function Option({ to, name }) {
    return (
        <Container>
            <Link to={to}>{name}</Link>
        </Container>
    );
}
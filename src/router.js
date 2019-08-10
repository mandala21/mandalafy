import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Pipefy from "./pages/Pipefy";
import Home from "./pages/Home";

//stateless components
//pode ser declarado como uma função
//switch garante que apenas uma rota seja chamada
//exact garante que a rota tenha que ser igual para ser chamada
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/pipefy" component={Pipefy} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
import React from "react";
import { BrowserRouter as BRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login";

const Router = () => {
    return(
        <BRouter>
            <Switch>
                <Route path='/' exact component={Login} />
                <Route path='/home' exact component={Home} />
            </Switch>
        </BRouter>
    );
}

export default Router;
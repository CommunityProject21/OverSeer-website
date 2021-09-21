import React from "react";
import { BrowserRouter as BRouter, Route, Switch } from 'react-router-dom';
import Pd from './Pages/Personal Details/Personald'

const Router = () => {
    return(
        <BRouter>
            <Switch>
                <Route path='/' exact component={Pd} />
            </Switch>
        </BRouter>
    );
}

export default Router;
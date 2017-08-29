import React from 'react';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import LoginForm from "../login/Login";
import Main from "../main/Main";
import App from "../App";

export const Routers=(
    <Router history={browserHistory}>
        <Route path="/" components={App}>
            <IndexRoute components={LoginForm}/>
            <Route path="login" components={LoginForm}/>
            <Route path="detail" components={Main}/>
        </Route>
    </Router>
);
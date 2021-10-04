import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {routes} from "../routes";

const AppRouter = () => {
    return (
        <Switch>
            {routes.map(route =>
                <Route component={route.component} path={route.path} exact={route.exact}/>
            )}
            <Redirect to ='/error'/>
        </Switch>
    )
}

export default AppRouter;
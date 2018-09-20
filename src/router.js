import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import HomepageContainer from './homepage';
import HatsScreen from './hats-screen';
import TopsScreen from './pants-screen';
import PantsScreen from './hats-screen';

let NotFound = () => <h1>404 not found</h1>
let Root = () =>
    <Redirect to="/home" />

const Router = () =>
    <HashRouter>
        <div>
            <Switch>
                <Route path="/home" component={HomepageContainer} />
                <Route path="/categories/hats" component={HatsScreen} />
                <Route path="/categories/tops" component={TopsScreen} />
                <Route path="/categories/pants" component={PantsScreen} />
                <Route path="/" component={Root} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </HashRouter>

export default Router;
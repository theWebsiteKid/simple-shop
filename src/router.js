import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import AllProductsContainer from './all-products-screen';
import Navbar from './navbar';
import Sidebar from './sidebar';
import HatsScreen from './hats-screen';
import TopsScreen from './pants-screen';
import PantsScreen from './hats-screen';

let NotFound = () => <h1>404 not found</h1>

const Router = () =>
    <HashRouter>
        <div>
            <Navbar />
            <Sidebar />
            <Switch>
                <Route exact path="/" component={AllProductsContainer} />
                <Route path="/categories/hats" component={HatsScreen} />
                <Route path="/categories/tops" component={TopsScreen} />
                <Route path="/categories/pants" component={PantsScreen} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </HashRouter>

export default Router;
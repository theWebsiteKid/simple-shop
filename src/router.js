import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import AllProductsContainer from './all-products-screen';
import Navbar from './navbar';
import Sidebar from './sidebar';
import CategoryScreenContainer from './category-screen';

let NotFound = () => <h1>404 not found</h1>

const Router = () =>
    <HashRouter>
        <div>
            <Navbar />
            <Sidebar />
            <Switch>
                <Route exact path="/" component={AllProductsContainer} />
                <Route path="/categories/:id" component={CategoryScreenContainer} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </HashRouter>

export default Router;
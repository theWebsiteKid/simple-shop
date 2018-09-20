import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar';
import Sidebar from './sidebar';

let AllProducts = () =>
    <div>
        <Navbar />
        <Sidebar />
    </div>

let AllProductsContainer = connect()(AllProducts)
export default AllProductsContainer;
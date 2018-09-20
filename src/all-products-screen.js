import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar';
import Sidebar from './sidebar';

let AllProducts = () =>
    <h1>All Products</h1>

let AllProductsContainer = connect()(AllProducts)
export default AllProductsContainer;
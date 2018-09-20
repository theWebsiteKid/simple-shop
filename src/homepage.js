import React from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar';
import Sidebar from './sidebar';

let Homepage = () =>
    <div>
        <Navbar />
        <Sidebar />
    </div>

let HomepageContainer = connect()(Homepage)
export default HomepageContainer;
import React from 'react';
import { NavLink } from 'react-router-dom';

let Sidebar = () =>
    <ul>
        <li><NavLink to='/categories/all'>All</NavLink></li>
        <li><NavLink to='/categories/hats'>Hats</NavLink></li>
        <li><NavLink to='/categories/tops'>Tops</NavLink></li>
        <li><NavLink to='/categories/pants'>Pants</NavLink></li>
    </ul>

export default Sidebar;
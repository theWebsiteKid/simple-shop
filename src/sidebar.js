import React from 'react';
import { NavLink } from 'react-router-dom';

let Sidebar = () =>
    <nav>
        <NavLink to='/categories/all'>All</NavLink>
        <NavLink to='/categories/hats'>Hats</NavLink>
        <NavLink to='/categories/tops'>Tops</NavLink>
        <NavLink to='/categories/pants'>Pants</NavLink>
    </nav>

export default Sidebar;
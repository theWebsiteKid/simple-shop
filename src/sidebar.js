import React from 'react';
import { NavLink } from 'react-router-dom';

let Sidebar = () =>
    <nav>
        <NavLink to='/categories/all'>All</NavLink>
        <NavLink to='/categories/all'>Hats</NavLink>
        <NavLink to='/categories/all'>Tops</NavLink>
        <NavLink to='/categories/all'>Pants</NavLink>
    </nav>

export default Sidebar;
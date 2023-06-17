import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="header">
                <NavLink to='/'>Shop</NavLink>
                <NavLink to='orders'>Orders</NavLink>
                <NavLink to='inventory'>Inventory</NavLink>
                <NavLink to='about'>About</NavLink>
            </div>
        </div>
    );
};

export default Header;
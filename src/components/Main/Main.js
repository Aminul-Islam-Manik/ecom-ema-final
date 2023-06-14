import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Main.css';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className="layout">
                <div className="change-layout">
                <Outlet></Outlet>
                </div>
                <div className="static-layout">
                <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default Main;
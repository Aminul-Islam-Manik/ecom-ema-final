import React from 'react';
import Header from '../Header/Header';
import './Main.css';
import { Outlet } from 'react-router-dom';


const Main = () => {

    return (
        <div className='main'>
            <div className="main-top">
            <Header></Header>
            </div>
            <div className="main-bottom">
            <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;
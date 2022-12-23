import React from 'react';
import Header from '../header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../routers/Routers'
import { parsePath } from 'react-router-dom';
function Layout() {
    return ( 
        <>
        <Header/>
        <div>
            <Routers Route={parsePath.home}/>
        </div>
        <Footer/>
        </>
    );
}

export default Layout;
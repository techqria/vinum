import React from 'react';
import Header from './Header';
//import Sidebar from '../sidebar/Sidebar';
import Navbar from "../navbar"


export const MainHeader: React.FC<any> = ({scroll}) => {
    return (
        <>

            <Navbar scroll={scroll}/>
            <Header />
        </>
    )
}
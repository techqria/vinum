import React from 'react';
import Header from './Header';
import Sidebar from '../sidebar/Sidebar';


export const MainHeader: React.FC<any> = ({scroll, older}) => {
    return (
        <>
            {
                older &&
                <Sidebar scroll={scroll} color={''}/>
            }
            <Header />
        </>
    )
}
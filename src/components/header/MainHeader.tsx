import React from 'react';
import Header from './Header';
import Sidebar from '../sidebar/Sidebar';
import  SidebarMobile  from '../sidebar/SidebarMobile'


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
import React from 'react';
import Header from './Header';
import  SidebarMobile  from '../sidebar/SidebarMobile'


export const MainHeader: React.FC<any> = ({scroll, older}) => {
    return (
        <> 
            {
                 older && 
                <SidebarMobile scroll={scroll} color={''}/>
            }
            <Header />
        </>
    )
}
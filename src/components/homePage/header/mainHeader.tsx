import  Header  from './header';
import { ShoppingCart } from './ShoppingCart';
import Subheader from './Subheader';
import SideBar from './sidebar';

export const MainHeader = () => {
    return (

        <>  
            <SideBar />
            <ShoppingCart />
            <Header />
            <Subheader />


        </>
    )
}
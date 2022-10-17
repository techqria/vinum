
import { ShoppingCart } from './ShoppingCart';
import Subheader from './Subheader';
import SideBar from '../../../sidebar';

export const Header = () => {
    return (

        <>
            
            <SideBar />
            <ShoppingCart />
            <section className="pt-5 pb-5 bg-header text-white">
                <div className="container d-flex flex-column justify-content-center align-items-center">
                    <img width={250} className="img-fluid" src="https://vinum-wine.s3.amazonaws.com/logoVinum.svg" alt="logo.svg" />
                    <h2 className="pt-5 pb-5 text-center fw-light fst-italic">A maior revenda de vinhos de Brasília e região</h2>
                </div>
            </section>

            <Subheader />


        </>
    )
}
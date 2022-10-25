import React, { useEffect, useState } from "react";
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components/HomePage/Main";
import { Catalogo } from "./components/CatalogoPage/catalogo/Catalogo";
import { Inside } from "./components/InsideWine/InsideWine";
import { Admin } from "./components/Admin/admin";
import Cart from "./components/Cart/pages/Cart";
import Home from "./components/Cart/pages/Home";
import CartProvider from "./components/Cart/context/cart";
import ThemeProvider from "./components/Cart/context/theme";




function App() {
  return (
    <>
    <Router>
    <Routes>
        <Route>
           <Route path="/" element={<Main />}/>
           <Route path="/catalogo" element={<Catalogo />} />
           <Route path="/inside" element={<Inside />} />
           <Route path="/admin" element={<Admin />} />
           <Route path="/cart" element={<Cart />} />
       </Route>
    </Routes>
    </Router>
    </>

  );
}

export default App;

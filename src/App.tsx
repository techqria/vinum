import React, { useEffect, useState } from "react";
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Main } from "./pages/Home/Main";
import { Catalogo } from "./pages/Catalogo/catalogo/Catalogo";
import { Inside } from "./components/InsideWine/InsideWine";
import { Admin } from "./pages/Admin/Admin";
import Cart from "./components/Cart/pages/Cart";
import { NewProduct } from "./pages/Admin/NewProduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/inside" element={<Inside />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/novo-produto" element={<NewProduct />} />

        </Routes>
      </Router>
    </>

  );
}

export default App;

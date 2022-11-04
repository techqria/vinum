import React, { useEffect, useState } from "react";
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Main } from "./pages/Home/Main";
import { Catalogo } from "./pages/Catalogo/Catalogo";
import { Inside } from "./pages/InsideWine/InsideWine";
import { Admin } from "./pages/Admin/Admin";
import { NewProduct } from "./pages/Admin/NewProduct";
import { ChangeProduct } from "./pages/Admin/ChangeProduct";
import { RemoveProduct } from "./pages/Admin/RemoveProduct";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/inside" element={<Inside />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/novo-produto" element={<NewProduct />} />
          <Route path="/admin/alterar-produto" element={<ChangeProduct />} />
          <Route path="/admin/remover-produto" element={<RemoveProduct />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;

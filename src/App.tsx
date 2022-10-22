import React, { useEffect, useState } from "react";
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components/homePage/Main";
import { Catalogo } from "./components/catalogoPage/catalogo/Catalogo";
import { Inside } from "./components/insideWine/InsideWine";
import { Admin } from "./components/admin/admin";



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
       </Route>
    </Routes>
    </Router>
    </>

  );
}

export default App;

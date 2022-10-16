import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Main } from "./components/homePage/Main";
import { Catalogo } from "./components/catalogoPage/Catalogo";

function App() {
  return (
    <>
    <Router>
    <Routes>
        <Route>
           <Route path="/" element={<Main />}/>
           <Route path="/catalogo" element={<Catalogo />} />
       </Route>
    </Routes>
    </Router>
    </>

  );
}

export default App;

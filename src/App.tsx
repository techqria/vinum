import './App.css';
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import { Main } from "./pages/Home/Main";
import { Catalogo } from "./pages/Catalogo/mainCatalogo";
import { Inside } from "./pages/InsideWine/InsideWine";
import { Admin } from "./pages/Admin/Admin";
import { Login } from "./pages/Admin/Login";
import { NewProduct } from "./pages/Admin/NewProduct";
import { ChangeProduct } from "./pages/Admin/ChangeProduct";
import { RemoveProduct } from "./pages/Admin/RemoveProduct";
import { checkLogin } from './utils/checkLogin';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/inside/:id" element={<Inside />} />
          <Route path="/admin" element={checkLogin() ? <Admin /> : <Navigate to={'/login'} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/novo-produto" element={checkLogin() ? <NewProduct /> : <Navigate to={'/login'} />} />
          <Route path="/admin/alterar-produto" element={checkLogin() ? <ChangeProduct /> : <Navigate to={'/login'} />} />
          <Route path="/admin/remover-produto" element={checkLogin() ? <RemoveProduct /> : <Navigate to={'/login'} />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;

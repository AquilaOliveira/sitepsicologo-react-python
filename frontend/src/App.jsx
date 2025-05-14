
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"; 
import HomePage from './pages/HomePage';
import Login from './pages/login';
import CadastroForm from './pages/Cadastro';
import Acesso from './pages/acesso';

function App() {
  return (
    <>
      <Router>
        <Link to="/"></Link>
        <Link to="/login"></Link>
        <Link to="/cadastro"></Link>
        <Link to="/acesso"></Link>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/cadastro" element={<CadastroForm></CadastroForm>}></Route>
          <Route path="/acesso" element={<Acesso></Acesso>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

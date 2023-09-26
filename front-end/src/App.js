import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './pages/main/main.js'
import { AllProducts } from './pages/allProducts/allProducts';
import { Cadastro } from './pages/cadastro/cadastro'
import { Login } from './pages/login/login'
import ProductDetails from './pages/produto/productDetails'
import {Carrinho} from './pages/carrinho/carrinho'
import {AdicionarVenda} from './pages/adicionarVenda/adicionarVenda'
import { Perfil } from './pages/perfil/perfil';
import { EditProducts } from './pages/perfil/editProducts';
import { FinalizarCompra } from './pages/finalizarCompra/finalizarCompra';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/AllProducts/:tipo" element={<AllProducts/>}/>
          <Route path="/Cadastro" element={<Cadastro/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Produto/:id" element={<ProductDetails/>}/>
          <Route path="/Carrinho" element={<Carrinho/>}/>
          <Route path="/AdicionarVenda" element={<AdicionarVenda/>}/>
          <Route path="/Perfil" element={<Perfil/>}/>
          <Route path="/MeusProdutos" element={<EditProducts/>}/>
          <Route path="/FinalizarCompra" element={<FinalizarCompra/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
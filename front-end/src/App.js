import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Main} from './pages/main/main.js'
import { AllProducts } from './pages/allProducts/allProducts';
import {Cadastro} from './pages/cadastro/cadastro'
import {Login} from './pages/login/login'

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
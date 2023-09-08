import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Main} from './pages/main/main.js'
import { AllProducts } from './pages/allProducts/allProducts';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/AllProducts/:tipo" element={<AllProducts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
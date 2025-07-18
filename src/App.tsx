import './styles/App.css'
import {Header} from './components/Header'
import { BestSellers } from './components/bestSellers'
import {Route, Routes} from "react-router"
import { Product } from './components/Product'


function App() {
  return (
    <div className="appContainer">
      <Header />
      <Routes>
        <Route path="/" element={<BestSellers />} />
        <Route path="/product/:productId" element={<Product />} />
      </Routes> 
    </div>
  );
}

export default App
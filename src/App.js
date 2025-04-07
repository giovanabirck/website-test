import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import ProductDesignPage from './pages/Product Design/ProductDesign';
import GraphicDesignPage from './pages/GraphicDesign';
import SpatialDesignPage from './pages/SpatialDesign';
import VisualArtPage from './pages/VisualArt';
import Home from './pages/Home';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-design" element={<ProductDesign />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/spatial-design" element={<SpatialDesign />} />
          <Route path="/visual-art" element={<VisualArt />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

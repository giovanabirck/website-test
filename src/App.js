import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import ProductDesignPage from './pages/product-design/ProductDesign';
import GraphicDesignPage from './pages/graphic-design/GraphicDesign';
import SpatialDesignPage from './pages/spatial-design/SpatialDesign';
import VisualArtPage from './pages/visual-art/VisualArt';
import Home from './pages/home/Home';


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

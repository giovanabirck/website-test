import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Header from './pages/header/Header';

import ProductDesign from './pages/product-design/ProductDesign';
import ProductDesignAbout from './pages/product-design/about/ProductDesignAbout';
import ProductDesignWork from './pages/product-design/work/ProductDesignWork';
import ProductDesignReferences from './pages/product-design/references/ProductDesignReferences';
import ProductDesignResume from './pages/product-design/resume/ProductDesignResume';

import GraphicDesign from './pages/graphic-design/GraphicDesign';
import SpatialDesign from './pages/spatial-design/SpatialDesign';
import VisualArt from './pages/visual-art/VisualArt';
import Home from './pages/home/Home';

import Footer from './pages/footer/Footer';


function App() {

  return (
    <Router>
      <div className="App">

        <Header/>

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/product-design" element={<ProductDesign />} />
          <Route path="/product-design/about" element={<ProductDesignAbout />} />
          <Route path="/product-design/work" element={<ProductDesignWork />} />
          <Route path="/product-design/references" element={<ProductDesignReferences />} />
          <Route path="/product-design/resume" element={<ProductDesignResume />} />

          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/spatial-design" element={<SpatialDesign />} />
          <Route path="/visual-art" element={<VisualArt />} />
        </Routes>

        <Footer/>

      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { Link } from "react-router-dom";
import './ProductDesign.modules.css';

function ProductDesign() {
    return (
      <>
        <div className="header">
          <h1>
            <Link to="/" className="header_link">
              Giovana Birck
            </Link>
          </h1>
          <h1>/ Product Design</h1>
        </div>

        <div className="main_container">
          <div className="navigation">
            <h3>work</h3>
            <h3>about</h3>
            <h3>references</h3>
            <h3>resume</h3>
          </div>

          <div className="content">
            <h2>Product Design</h2>
            <p>Show your product design work here...</p>
          </div>
        </div>
  
        <div className="footer">
          <p>contact@giovanabirck.com</p>
        </div>
      </>
    );
}
  
export default ProductDesign;
  
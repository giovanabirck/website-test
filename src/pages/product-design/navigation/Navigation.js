import React from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.modules.css';

function Navigation({ activeTab, activeStyles }) {

    return (
        <div className="navigation">
            <Link to="/product-design/work" className={`navigation_link ${isActive('/product-design/work')}`}>
                <h3>work</h3>
            </Link>
 
            <Link to="/product-design/about" className={`navigation_link ${isActive('/product-design/about')}`}>
                <h3>about</h3>
            </Link>

            <Link to="/product-design/references" className={`navigation_link ${isActive('/product-design/references')}`}>
                <h3>references</h3>
            </Link>

            <Link to="/product-design/resume" className={`navigation_link ${isActive('/product-design/resume')}`}>
                <h3>resume</h3>
            </Link>

        </div>
    );
}

export default Navigation;

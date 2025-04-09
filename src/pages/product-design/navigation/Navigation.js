import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.modules.css';

function Navigation() {
    const location = useLocation();

    return (
        <div className="navigation">
        <Link to="/product-design/work" className={`navigation_link ${location.pathname === '/product-design/work' ? 'active' : ''}`}>
            <h3>work</h3>
        </Link>

        <Link to="/product-design/about" className={`navigation_link ${location.pathname === '/product-design/about' ? 'active' : ''}`}>
            <h3>about</h3>
        </Link>

        <Link to="/product-design/references" className={`navigation_link ${location.pathname === '/product-design/references' ? 'active' : ''}`}>
            <h3>references</h3>
        </Link>

        <Link to="/product-design/resume" className={`navigation_link ${location.pathname === '/product-design/resume' ? 'active' : ''}`}>
            <h3>resume</h3>
        </Link>
        </div>
    );
}

export default Navigation;

import React from 'react';
// import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.modules.css';

function Navigation({ activeTab, activeStyles }) {

    return (
        <div className="navigation">
            <Link to="/product-design/work" style={activeTab === 'work' ? activeStyles : {}}> 
                <h3>work</h3>
            </Link>
 
            <Link to="/product-design/about" style={activeTab === 'about' ? activeStyles : {}}>
                <h3>about</h3>
            </Link>

            <Link to="/product-design/references" style={activeTab === 'references' ? activeStyles : {}}>           
                <h3>references</h3>
            </Link>

            <Link to="/product-design/resume" style={activeTab === 'resume' ? activeStyles : {}}>   
                <h3>resume</h3>
            </Link>

        </div>
    );
}

export default Navigation;

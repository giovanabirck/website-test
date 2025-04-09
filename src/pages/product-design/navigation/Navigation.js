import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.modules.css';

function Navigation() {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="navigation">
            <Link
                to="/product-design/work"
                className={`navigation_link ${activeLink === 'work' ? 'active' : ''}`}
                onClick={() => handleLinkClick('work')}
            >                
                <h3>work</h3>
            </Link>
 
            <Link
                to="/product-design/about"
                className={`navigation_link ${activeLink === 'about' ? 'active' : ''}`}
                onClick={() => handleLinkClick('about')}
            >
                <h3>about</h3>
            </Link>

            <Link
                to="/product-design/references"
                className={`navigation_link ${activeLink === 'references' ? 'active' : ''}`}
                onClick={() => handleLinkClick('references')}
            >                
                <h3>references</h3>
            </Link>

            <Link
                to="/product-design/resume"
                className={`navigation_link ${activeLink === 'resume' ? 'active' : ''}`}
                onClick={() => handleLinkClick('resume')}
            >                
                <h3>resume</h3>
            </Link>

        </div>
    );
}

export default Navigation;

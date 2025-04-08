import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './ProductDesign.modules.css';

function ProductDesign() {
  const [activeTab, setActiveTab] = useState('everyone');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'everyone':
        return <div className='tab_content'>
            <h2>Making things engaging and easy to use</h2>
            <p>
              <span>Designer</span> with the goal of creating a more inclusive and beautiful 
              digital world 🌼 Passionate about building products that help 
              people complete tasks seamlessly and find what they need!
            </p>
            <div className='bullet_points'>
              <p>Vancouver based</p>
              <p className='dot'>·</p>
              <p>Empathy-Driven</p>
              <p className='dot'>·</p>
              <p>Creative Thinker</p>
            </div>
        </div>;
      case 'recruiters':
        return <div className='tab_content'>
          <h2>Designing with innovation and purpose</h2>
          <p>
            <span>Product Designer</span> with a multidisciplinary background in the cultural and 
            entertainment industries, I incorporate a holistic approach to my designs. 
            Strong focus on interaction design, strategy and accessibility.
          </p>
        </div>;
      case 'clients':
        return <div className='tab_content'>
          <h2>Helping you reach your business goals</h2>
          <p>
            <span>Designer</span> working in the intersection of art, design and technology, 
            I have the goal of building and optimizing your business digital 
            image through intuitive and beautiful experiences 🔥
          </p>
        </div>;
      default:
        return null;
    }
  };

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

          <div className="tabs">
            <button onClick={() => setActiveTab('everyone')} className={activeTab === 'everyone' ? 'active' : ''}>
              For Everyone
            </button>
            <button onClick={() => setActiveTab('recruiters')} className={activeTab === 'recruiters' ? 'active' : ''}>
              Recruiters
            </button>
            <button onClick={() => setActiveTab('clients')} className={activeTab === 'clients' ? 'active' : ''}>
              Clients
            </button>
          </div>

          <div className="tab-content">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </>
  );
}
  
export default ProductDesign;
  
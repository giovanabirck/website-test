import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './ProductDesign.modules.css';

function ProductDesign() {
  const [activeTab, setActiveTab] = useState('everyone');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'everyone':
        return <h2>Making things engaging and easy to use</h2>;
      case 'recruiters':
        return <h2>Designing with innovation and purpose</h2>;
      case 'clients':
        return <h2>Helping you reach your business goals</h2>;
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
  
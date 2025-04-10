import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './ProductDesign.modules.css';

import Navigation from './navigation/Navigation';

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
          <ul className='bullet_points'>
            <li>Vancouver based</li>
            <li>Empathy-Driven</li>
            <li>Creative Thinker</li>
          </ul>
        </div>;

      case 'recruiters':
        return <div className='tab_content'>
          <h2>Designing with innovation and purpose</h2>
          <p>
            <span>Product Designer</span> with a multidisciplinary background in the cultural and 
            entertainment industries, I incorporate a holistic approach to my designs. 
            Strong focus on interaction design, strategy and accessibility.
          </p>
          <ul className='bullet_points'>
            <li>Vancouver based</li>
            <li>+5 years of experience</li>
            <li>B2B & SaaS UX Expertise</li>
          </ul>
        </div>;

      case 'clients':
        return <div className='tab_content'>
          <h2>Helping you reach your business goals</h2>
          <p>
            <span>Designer</span> working in the intersection of art, design and technology, 
            I have the goal of building and optimizing your business digital 
            image through intuitive and beautiful experiences 🔥
          </p>
          <ul className='bullet_points'>
            <li>Vancouver based (PST timezone)</li>
            <li>Cultural Engagement</li>
            <li>Strategic Creativity</li>
          </ul>
        </div>;
      default:
      return null;
    }
  };

  return (
    <div className="product_design_page">

      <div className="main_container">

        <Navigation/>

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

          {/* <hr/> */}

          <div className='projects_list'>
            <div className='project'>
              <div className='image_wrapper'>
                <img src='/product_design/adp_hr_actions.png' alt='HR Actions'/>
              </div>
              <h4>Transforming ADP's HR Actions with a Scalable Design System</h4>
              <ul className='project_details'>
                <li>shipped</li>
                <li>desktop</li>
              </ul>
            </div>

            <div className='project'>
              <div className='image_wrapper'>
                <img src='/product_design/nomadago_rec.png' alt='HR Actions'/>
              </div>
              <h4>Enhancing the Nomadic Experience with Network Recommendations</h4>
              <ul className='project_details'>
                <li>in development</li>
                <li>mobile</li>
              </ul>
            </div>

            <div className='project'>
              <div className='image_wrapper'>
                <img src='/product_design/adp_ttd.png' alt='HR Actions'/>
              </div>
              <h4>Improving Usability in MyADP's Task Management Tool, Things to Do</h4>
              <ul className='project_details'>
                <li>shipped</li>
                <li>desktop</li>
              </ul>
            </div>
          </div>

          <button className='button_all_projects'>
            see all projects
            <svg
              className="arrow_icon"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
}
  
export default ProductDesign;
  
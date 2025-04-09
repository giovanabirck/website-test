import { Link } from 'react-router-dom';
import './ProductDesignAbout.modules.css';

import Navigation from '../navigation/Navigation';

function ProductDesignAbout() {
    return (
        <div className="product_design_about">
            
            {/* <Navigation/> */}

            <Navigation 
                className="styling_active"
            />

            <div className="content">
                <h1>About 🙂</h1>
            </div>

        </div>
    );
}
  
export default ProductDesignAbout;
  
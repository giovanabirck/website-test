import { Link } from 'react-router-dom';
import './ProductDesignWork.modules.css';

function ProductDesignWork() {
  
  return (
    <div className="product_design_work">
        <div className="header">
            <h1>
                <Link to="/" className="header_link">
                    Giovana Birck
                </Link>
            </h1>
            <h1>/ Product Design</h1>
            <h1>/ Resume</h1>
        </div>

        <div className="main_container">
            <div className="navigation">
                <Link to="/product-design/work" className='navigation_link'>
                    <h3>work</h3>
                </Link>

                <Link to="/product-design/about" className='navigation_link'>
                    <h3>about</h3>
                </Link>

                <Link to="/product-design/references" className='navigation_link'>
                    <h3>references</h3>
                </Link>

                <Link to="/product-design/resume" className='navigation_link'>
                    <h3>resume</h3>
                </Link>
            </div>
        </div>

        <div className="content">

            <h1>Work 🙂</h1>
        
        </div>


        <div className='footer'>
            <p>contact@giovanabirck.com</p>
        </div>
    </div>
  );
}
  
export default ProductDesignWork;
  
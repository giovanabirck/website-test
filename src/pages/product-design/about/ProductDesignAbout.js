import './ProductDesignAbout.modules.css';

function ProductDesignAbout() {
  
  return (
    <div className="product_design_work">
        <div className="header">
            <h1>
            <Link to="/">
                Giovana Birck
            </Link>
            </h1>
            <h1>/ Product Design</h1>
            <h1>/ About</h1>
        </div>

        <div className="main_container">
            <div className="navigation">
                <Link to="/" className='navigation_link'>
                    <h3>work</h3>
                </Link>

                <Link to="/">
                    <h3>about</h3>
                </Link>

                <Link to="/">
                    <h3>references</h3>
                </Link>

                <Link to="/">
                    <h3>resume</h3>
                </Link>
            </div>
        </div>

        <div className="content">

            <h1>About 🙂</h1>
        
        </div>


        <div className='footer'>
            <p>contact@giovanabirck.com</p>
        </div>
    </div>
  );
}
  
export default ProductDesignAbout;
  
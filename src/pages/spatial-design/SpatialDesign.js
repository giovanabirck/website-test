import { Link } from "react-router-dom";
import './SpatialDesign.modules.css';

function SpatialDesign() {
    return (
      <>
        <div className="header">
          <h1>
            <Link to="/" className="header_link">
              Giovana Birck
            </Link>
          </h1>
          <h1>/ Spatial Design</h1>
        </div>
  
        <div className="content">
          <h2>Spatial Design</h2>
          <p>Show your spatial design work here...</p>
        </div>
  
        <div className="footer">
          <p>contact@giovanabirck.com</p>
        </div>
      </>
    );
}
  
export default SpatialDesign;
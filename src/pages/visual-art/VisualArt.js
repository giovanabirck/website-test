import { Link } from "react-router-dom";
import './VisualArt.modules.css';

function VisualArt() {
    return (
      <>
        {/* <div className="header">
          <h1>
            <Link to="/" className="header_link">
              Giovana Birck
            </Link>
          </h1>
          <h1>/ Visual Art</h1>
        </div> */}
  
        <div className="content">
          <h2>Visual Art</h2>
          <p>Show your visual art work here...</p>
        </div>
  
        <div className="footer">
          <p>contact@giovanabirck.com</p>
        </div>
      </>
    );
}
  
export default VisualArt;
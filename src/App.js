import logo from './logo.svg';
import './App.css';

const images = [
  "/hover_product_design/image01.png",
  "/hover_product_design/image02.png",
  "/hover_product_design/image03.png",
  "/hover_product_design/image04.png",
  "/hover_product_design/image05.png",
  "/hover_product_design/image06.png",
  "/hover_product_design/image07.png",
  "/hover_product_design/image08.png",
  "/hover_product_design/image09.png",
  "/hover_product_design/image10.png",
];

function App() {

  const [hovered, setHovered] = useState(false);

  return (
    <div className="App">
      <div className='header'>
        <h1>Giovana Birck</h1>
      </div>

      <div className='option'>

        <h2 
          onMouseEnter={() => setHovered(true)} 
          onMouseLeave={() => setHovered(false)}
        >
          Product Design

          {hovered && (
            <div className="image-gallery">
              {images.map((src, index) => (
              <img key={index} src={src} alt="popup" className="popup-image" />
              ))}
            </div>
          )}

        </h2>

        <h2>Graphic Design</h2>
        <h2>Spatial Design</h2>
        <h2>Visual Art</h2>
      </div>

      <div className='footer'>
        <p>contact@giovanabirck.com</p>
      </div>

    </div>
  );
}

export default App;

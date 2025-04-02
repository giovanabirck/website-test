import logo from './logo.svg';
import { useState, useEffect } from "react";
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

function getRandomPosition() {
  const frameWidth = 400;
  const frameHeight = 400;
  const marginRight = 100;
  
  const x = window.innerWidth - frameWidth - marginRight + Math.random() * (frameWidth - 50);
  const y = 100 + Math.random() * frameHeight;

  return { x, y };
}

function App() {
  const [hovered, setHovered] = useState(false);
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    if (hovered) {
      setVisibleImages([]);
      images.forEach((image, index) => {
        setTimeout(() => {
          setVisibleImages((prev) => [...prev, { src: image, position: getRandomPosition() }]);
        }, index * 300);
      });
    } else {
      setVisibleImages([]);
    }
  }, [hovered]);


  return (
    <div className="App">
      <div className='header'>
        <h1>Giovana Birck</h1>
      </div>

      <div className='option'>

        <div>
          <h2 
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
          >
            Product Design
          </h2>

          {hovered && (
            <div className="image-gallery">
              {visibleImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt="popup"
                  className="popup-image"
                  style={{ 
                    left: `${img.position.x}px`, 
                    top: `${img.position.y}px`,
                    maxWidth: "150px",
                    opacity: 0,
                    animation: `fadeIn 0.5s ease-in-out ${index * 0.2}s forwards`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

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

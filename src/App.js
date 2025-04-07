import logo from './logo.svg';
import { useState, useEffect, useRef } from "react";
import './App.css';

const productDesignImages = [
  "/product_design/image01.jpg",
  "/product_design/image02.jpg",
  "/product_design/image03.jpg",
  "/product_design/image04.jpg",
  "/product_design/image05.jpg",
  "/product_design/image06.jpg",
  "/product_design/image07.jpg",
  "/product_design/image08.jpg",
  "/product_design/image09.jpg",
  "/product_design/image10.jpg",
];

const graphicDesignImages = [
  "/graphic_design/image01.jpg",
  "/graphic_design/image02.jpg",
  "/graphic_design/image03.jpg",
  "/graphic_design/image04.jpg",
  "/graphic_design/image05.jpg",
  "/graphic_design/image06.jpg",
  "/graphic_design/image07.jpg",
  "/graphic_design/image08.jpg",
  "/graphic_design/image09.jpg",
  "/graphic_design/image10.jpg",
];

const spatialDesignImages = [
  "/spatial_design/image01.jpg",
  "/spatial_design/image02.jpg",
  "/spatial_design/image03.jpg",
  "/spatial_design/image04.jpg",
  "/spatial_design/image05.jpg",
  "/spatial_design/image06.jpg",
  "/spatial_design/image08.jpg",
  "/spatial_design/image07.jpg",
  "/spatial_design/image09.jpg",
  "/spatial_design/image10.jpg",
];

const visualArtImages = [
  "/visual_art/image01.jpg",
  "/visual_art/image02.jpg",
  "/visual_art/image03.jpg",
  "/visual_art/image04.jpg",
  "/visual_art/image05.jpg",
  "/visual_art/image06.jpg",
  "/visual_art/image07.jpg",
  "/visual_art/image08.jpg",
  "/visual_art/image09.jpg",
  "/visual_art/image10.jpg",
];

const categories = [
  { name: "Product Design", images: productDesignImages },
  { name: "Graphic Design", images: graphicDesignImages },
  { name: "Spatial Design", images: spatialDesignImages },
  { name: "Visual Art", images: visualArtImages },
];

function getRandomPosition() {
  const x = Math.random() * 450;
  const y = Math.random() * 450;
  return { x, y };
}

function App() {

  const [visibleImages, setVisibleImages] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null); 

  const timeoutsRef = useRef([]);

  useEffect(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  
    if (hoveredCategory) {
      setVisibleImages([]);
  
      hoveredCategory.images.forEach((image, index) => {
        const addImageTimeout = setTimeout(() => {
          setVisibleImages((prev) => [
            ...prev,
            { src: image, position: getRandomPosition(), show: false }
          ]);
        
          const showDelay = index === 0 ? 500 : 50;
        
          const showImageTimeout = setTimeout(() => {
            setVisibleImages((prev) =>
              prev.map((img, i) =>
                i === index ? { ...img, show: true } : img
              )
            );
          }, showDelay);
        
          timeoutsRef.current.push(showImageTimeout);
        
        }, index * 300);
        
        timeoutsRef.current.push(addImageTimeout);
      });
    } else {
      setVisibleImages([]);
    }
  
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [hoveredCategory]);

  return (
    <div className="App">
      <div className='header'>
        <h1>Giovana Birck</h1>
      </div>


    <div className="option">
      {categories.map((category) => (
        <h2
          key={category.name}
          onMouseEnter={() => setHoveredCategory(category)}
          onMouseLeave={() => setHoveredCategory(null)}
          className={hoveredCategory && hoveredCategory.name !== category.name ? "faded" : ""}
        >
          {category.name}
        </h2>
      ))}
    </div>

    {hoveredCategory && (
      <div className="image-gallery">
        {visibleImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt="popup"
            className={`popup-image ${img.show ? "show" : ""}`}
            style={{ 
              position: "absolute", 
              left: `${img.position.x}px`, 
              top: `${img.position.y}px`
            }}
          />
        ))}
      </div>
    )}

      <div className='footer'>
        <p>contact@giovanabirck.com</p>
      </div>

    </div>
  );
}

export default App;

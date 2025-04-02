import logo from './logo.svg';
import { useState, useEffect } from "react";
import './App.css';

const productDesignImages = [
  "/product_design/image01.png",
  "/product_design/image02.png",
  "/product_design/image03.png",
  "/product_design/image04.png",
  "/product_design/image05.png",
  "/product_design/image06.png",
  "/product_design/image07.png",
  "/product_design/image08.png",
  "/product_design/image09.png",
  "/product_design/image10.png",
];

const graphicDesignImages = [
  "/graphic_design/image01.png",
  "/graphic_design/image02.png",
  "/graphic_design/image03.png",
  "/graphic_design/image04.png",
  "/graphic_design/image05.png",
  "/graphic_design/image06.png",
  "/graphic_design/image07.png",
  "/graphic_design/image08.png",
  "/graphic_design/image09.png",
  "/graphic_design/image10.png",
];

const spatialDesignImages = [
  "/spatial_design/image01.png",
  "/spatial_design/image02.png",
  "/spatial_design/image03.png",
  "/spatial_design/image04.png",
  "/spatial_design/image05.png",
  "/spatial_design/image06.png",
  "/spatial_design/image08.png",
  "/spatial_design/image07.png",
  "/spatial_design/image09.png",
  "/spatial_design/image10.png",
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

function getRandomPosition() {
  const x = Math.random() * 300;
  const y = Math.random() * 300;
  return { x, y };
}

function App() {

  const [hovered, setHovered] = useState(false);
  const [visibleImages, setVisibleImages] = useState([]);
  const timeoutsRef = useRef([]);

  const handleHover = (category) => {
    setHovered(category);
  };

  useEffect(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    if (hovered) {
      setVisibleImages([]);

      const imagesToShow =
        hovered === "productDesign"
          ? productDesignImages
          : hovered === "graphicDesign"
          ? graphicDesignImages
          : hovered === "spatialDesign"
          ? spatialDesignImages
          : visualArtImages;

        imagesToShow.forEach((image, index) => {
          const timeout = setTimeout(() => {
            setVisibleImages((prev) => [
              ...prev,
              { src: image, position: getRandomPosition() },
            ]);
          }, index * 300);
          timeoutsRef.current.push(timeout);
        });
      } else { setVisibleImages([]); }
    }, [hovered]
  );


  return (
    <div className="App">
      <div className='header'>
        <h1>Giovana Birck</h1>
      </div>

      <div className='option'>

        <div className='productDesignOption'>
          <h2 
            onMouseEnter={() => handleHover("productDesign")}
            onMouseLeave={() => setHovered(null)}
          >
            Product Design
          </h2>

          {/* {hovered === "productDesign" && (
            <div className="image-gallery">
              {visibleImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt="popup"
                  className="popup-image"
                  style={{ position: "absolute", left: `${img.position.x}px`, top: `${img.position.y}px` }}
                />
              ))}
            </div>
          )} */}
        </div>

        <div className='graphicDesignOption'>
          <h2
            onMouseEnter={() => handleHover("graphicDesign")}
            onMouseLeave={() => setHovered(null)}
          >
            Graphic Design
          </h2>

          {/* {hovered === "graphicDesign" && (
            <div className="image-gallery">
              {visibleImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt="popup"
                  className="popup-image"
                  style={{ position: "absolute", left: `${img.position.x}px`, top: `${img.position.y}px` }}
                />
              ))}
            </div>
          )} */}
        </div>

        <div className='spatialDesignOption'>
          <h2
            onMouseEnter={() => handleHover("spatialDesign")}
            onMouseLeave={() => setHovered(null)}
          >
            Spatial Design
          </h2>

          {/* {hovered === "spatialDesign" && (
            <div className="image-gallery">
              {visibleImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt="popup"
                  className="popup-image"
                  style={{ position: "absolute", left: `${img.position.x}px`, top: `${img.position.y}px` }}
                />
              ))}
            </div>
          )} */}
        </div>

        <div className='visualArtOption'>
          <h2
            onMouseEnter={() => handleHover("visualArt")}
            onMouseLeave={() => setHovered(null)}
          >
            Visual Art
          </h2>

          {/* {hovered === "visualArt" && (
            <div className="image-gallery">
              {visibleImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt="popup"
                  className="popup-image"
                  style={{ position: "absolute", left: `${img.position.x}px`, top: `${img.position.y}px` }}
                />
              ))}
            </div>
          )} */}
        </div>
      </div>

      <div className="image-gallery">
        {visibleImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt="popup"
            className="popup-image"
            style={{
              position: "absolute",
              left: `${img.position.x}px`,
              top: `${img.position.y}px`,
            }}
          />
        ))}
      </div>

      <div className='footer'>
        <p>contact@giovanabirck.com</p>
      </div>

    </div>
  );
}

export default App;

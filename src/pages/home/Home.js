import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './Home.modules.css';



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

// const categories = [
//   { name: "Product Design", images: productDesignImages },
//   { name: "Graphic Design", images: graphicDesignImages },
//   { name: "Spatial Design", images: spatialDesignImages },
//   { name: "Visual Art", images: visualArtImages },
// ];

const categories = [
    { 
        name: "Product Design", 
        path: "/product-design",
        images: productDesignImages
    },
    { 
        name: "Graphic Design", 
        path: "/graphic-design",
        images: graphicDesignImages
    },
    { 
        name: "Spatial Design", 
        path: "/spatial-design",
        images: spatialDesignImages 
    },
    { 
        name: "Visual Art", 
        path: "/visual-art",
        images: visualArtImages 
    },
];

function getRandomPosition() {
  const x = Math.random() * 450;
  const y = Math.random() * 450;
  return { x, y };
}

function Home() {

  const [visibleImages, setVisibleImages] = useState([]);
  const [hoveredCategory, setHoveredCategory] = useState(null); 

  const timeoutsRef = useRef([]);

  useEffect(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  
    if (hoveredCategory) {
      setVisibleImages([]);
  
      const startDelay = 250;
  
      hoveredCategory.images.forEach((image, index) => {
        const timeout = setTimeout(() => {
          setVisibleImages((prev) => [
            ...prev,
            { src: image, position: getRandomPosition(), show: false }
          ]);
  
          setTimeout(() => {
            setVisibleImages((prev) =>
              prev.map((img, i) =>
                i === index ? { ...img, show: true } : img
              )
            );
          }, 50); 
  
        }, startDelay + index * 300); 
        timeoutsRef.current.push(timeout);
      });
    } else {
      setVisibleImages([]);
    }
  
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, [hoveredCategory]);

  return (
    <div className="Home">
      <div className='header'>
        <h1>Giovana Birck</h1>
      </div>

        <div className="option">
            {categories.map((category) => (
                <Link
                    key={category.name}
                    to={category.path}
                    onMouseEnter={() => setHoveredCategory(category)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    className={hoveredCategory && hoveredCategory.name !== category.name ? "faded" : ""}
                >
                    <h2>{category.name}</h2>
                </Link>
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

export default Home;

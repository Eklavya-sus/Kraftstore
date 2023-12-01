import React, { useState, useEffect } from 'react';
import product1 from './sampleProducts/product1.jpg';
import product2 from './sampleProducts/product2.jpg';
import product3 from './sampleProducts/product3.jpg';
import product4 from './sampleProducts/product4.jpg';
// import product5 from './sampleProducts/product5.jpg';

const images = [
  product1,
  product2,
  product3,
  product4,
  // product5,
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[200px] md:h-screen w-full bg-gray-300">
      <div className="md:h-screen h-[200px] relative overflow-hidden">
        <div className="h-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentImage === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

"use client";

import React, { useState, useEffect } from "react";

const ImagesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "/images/hero-image/lighted-name-plate.jpg",
    "/images/hero-image/craft-one.jpg",
    "/images/hero-image/neon-light.jpg",
    "/images/hero-image/lighted-name-plate-2.jpg",
    "/images/hero-image/pillar-lamp.jpg",
    "/images/hero-image/craft-two.jpg",
    "/images/hero-image/solar-pillar-light.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 20000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="craft-carousel" className="relative w-full mb-10">
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img src={image} alt={`Craft image ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-1 left-1/2 space-x-3 rtl:space-x-reverse mb-3">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-gray-800' : 'bg-gray-400'}`}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagesCarousel;

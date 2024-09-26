import React, { useState, useEffect } from 'react';
import './image_slider.css';

interface ImageSliderProps {
  images: string[];
  interval?: number; // Optionaler Intervall für den automatischen Bildwechsel
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Automatischer Bildwechsel
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(sliderInterval); // Cleanup für das Intervall
  }, [currentIndex, interval]);

  // Zum nächsten Bild wechseln
  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500); // Dauer des Übergangs in ms
  };

  // Zum vorherigen Bild wechseln
  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="slider">
      <button className="slider-button prev" onClick={handlePrev}>
        &#10094; {/* Linker Pfeil */}
      </button>
      <div className={`slider-image-container ${isTransitioning ? 'transition' : ''}`}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
      </div>
      <button className="slider-button next" onClick={handleNext}>
        &#10095; {/* Rechter Pfeil */}
      </button>
    </div>
  );
};

export default ImageSlider;

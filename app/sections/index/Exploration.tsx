"use client";

import React, { useState, useCallback } from 'react';
import CarouselSlide from '@/components/sections/CarouselSlide';

const TOTAL_SLIDES = 5;

const slidesData = [
  { 
    videoSrc: '/video/glassmorphism-card.mp4' 
  },
  { 
    imageSrc: '/img/weather-card.jpeg', 
    imageAlt: 'Weather Card' 
  },
  { 
    videoSrc: '/video/neumorphism-auth-page.mp4' 
  },
  { 
    imageSrc: '/img/characters-and-glass-icons.jpeg', 
    imageAlt: 'Characters and Glass Icons' 
  },
  { 
    videoSrc: '/video/animated-donut-charts.mp4' 
  },
];

const Exploration = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + TOTAL_SLIDES) % TOTAL_SLIDES);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % TOTAL_SLIDES);
  }, []);

  const getSlidePosition = (slideIndex: number): string => {
    const diff = (slideIndex - activeIndex + TOTAL_SLIDES) % TOTAL_SLIDES;

    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    if (diff === TOTAL_SLIDES - 1) return 'left';
    if (diff === 2) return 'far-right';
    if (diff === TOTAL_SLIDES - 2) return 'far-left';
    return 'hidden';
  };

  return (
    <div className='exploration'>
      <div className="exploration-contents">
        <div className="exploration-heading">
          <h2>Explorations</h2>
        </div>

        <div className='exploration-carousel'>
          <button
            className="carousel-btn carousel-btn-left"
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          <div className="carousel-track">
            {slidesData.map((slide, i) => (
              <div
                key={i}
                className={`carousel-item carousel-item--${getSlidePosition(i)}`}
              >
                <CarouselSlide index={i} {...slide} />
              </div>
            ))}
          </div>

          <button
            className="carousel-btn carousel-btn-right"
            onClick={handleNext}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exploration;
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import React from 'react';

interface CarouselSlideProps {
  index: number;
  videoSrc?: string;
  imageSrc?: string | StaticImport;
  imageAlt?: string;
}

const CarouselSlide: React.FC<CarouselSlideProps> = ({ index, videoSrc, imageSrc, imageAlt }) => {
  return (
    <div className="carousel-slide">
      <div className='carousel-slide-video-container'>
        {videoSrc ? (
          <video src={videoSrc} muted loop autoPlay playsInline className="w-full h-full object-cover" />
        ) : (
          imageSrc && (
            <Image 
              src={imageSrc} 
              alt={imageAlt || `Slide ${index + 1}`} 
              fill
              className="object-cover"
            />
          )
        )}
      </div>
      <span className="carousel-slide-number">{index + 1}</span>
    </div>
  );
};

export default CarouselSlide;

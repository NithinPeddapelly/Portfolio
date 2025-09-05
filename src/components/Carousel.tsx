import React, { useState } from 'react';

interface CarouselProps {
  images: string[];
  altPrefix?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, altPrefix = 'Screenshot' }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
  <div className="relative w-full h-48 flex items-center justify-center overflow-hidden group">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${altPrefix} ${idx + 1}`}
          className={`object-cover w-full h-full shadow-md absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{ borderRadius: 0 }}
        />
      ))}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 border-2 border-white-400 hover:border-blue-500 bg-transparent text-white-300 hover:text-blue-400 rounded-full p-2 shadow-lg outline-none focus:ring-2 focus:ring-white-400"
            aria-label="Previous"
          >
            <span className="text-2xl font-bold">&#8592;</span>
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 border-2 border-white-400 hover:border-blue-500 bg-transparent text-white-300 hover:text-blue-400 rounded-full p-2 shadow-lg outline-none focus:ring-2 focus:ring-white-400"
            aria-label="Next"
          >
            <span className="text-2xl font-bold">&#8594;</span>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-30">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`block w-2 h-2 rounded-full ${idx === current ? 'bg-blue-500' : 'bg-slate-400/60'} transition`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;

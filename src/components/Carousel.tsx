import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: string[];
  altPrefix?: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, altPrefix = 'Screenshot' }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative h-full w-full overflow-hidden group">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${altPrefix} ${idx + 1}`}
          className={`absolute left-0 top-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${idx === current ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
          style={{ borderRadius: 0 }}
        />
      ))}

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-900/25 via-transparent to-transparent" />

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-slate-900/55 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/80 hover:bg-slate-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-slate-900/55 text-white shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/80 hover:bg-slate-800/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 z-30 flex -translate-x-1/2 gap-2 rounded-full border border-white/20 bg-slate-900/45 px-3 py-1.5 backdrop-blur-sm">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`block h-2.5 w-2.5 rounded-full transition-all ${idx === current ? 'bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;

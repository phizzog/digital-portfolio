'use client';

import { useState } from 'react';
import Image from 'next/image';

type Photo = {
  id: number;
  src: string;
  alt: string;
  caption: string;
  year: string;
};

const photos: Photo[] = [
  {
    id: 1,
    src: '/images/wrestling-child-1.jpg',
    alt: 'First wrestling tournament at age 8',
    caption: 'First tournament victory',
    year: '2004'
  },
  {
    id: 2,
    src: '/images/wrestling-child-2.jpg',
    alt: 'Training with coach at age 12',
    caption: 'Training with Coach Jeffire',
    year: '2008'
  },
  {
    id: 3,
    src: '/images/wrestling-teen-1.jpg',
    alt: 'High school championship match',
    caption: 'State Championship Finals',
    year: '2012'
  },
  {
    id: 4,
    src: '/images/wrestling-teen-2.jpg',
    alt: 'College wrestling team',
    caption: 'College Team Photo',
    year: '2015'
  },
  {
    id: 5,
    src: '/images/sweden-trip.jpg',
    alt: 'Trip to Sweden for international tournament',
    caption: 'International Tournament in Sweden',
    year: '2016'
  }
];

const PhotoGallery = () => {
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  return (
    <section className="py-20 bg-neutral-dark text-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center">
          My Wrestling Journey
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div 
              key={photo.id}
              className="relative overflow-hidden rounded-lg shadow-lg bg-neutral-medium group"
              onMouseEnter={() => setActivePhoto(photo.id)}
              onMouseLeave={() => setActivePhoto(null)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <div className="w-full h-full relative">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover transition-transform duration-500 ${
                      activePhoto === photo.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <div className="transform transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-2">
                  <p className="text-xs text-secondary-blue font-bold">
                    {photo.year}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {photo.caption}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery; 
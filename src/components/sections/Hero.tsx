'use client';

import { useRef, useState, useEffect } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Path - Parallax slower movement */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          transform: `translateY(${scrollY * 0.2}px)`,
          backgroundImage: 'url("/images/path-background.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Wrestling Mat - Parallax faster movement */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1/2 z-10" 
        style={{ 
          transform: `translateY(${scrollY * 0.1}px)`,
          backgroundImage: 'url("/images/wrestling-mat.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 drop-shadow-lg">
          My Story
        </h1>
        <p className="text-xl md:text-2xl font-quote italic max-w-3xl mx-auto mb-2 drop-shadow-md">
          The Journey Is More Valuable Than the Destination
        </p>
        <p className="text-lg md:text-xl font-heading font-bold mt-4 drop-shadow-md">
          By Kenny Snyder
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="text-white"
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 
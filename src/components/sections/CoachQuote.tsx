'use client';

import { useRef, useState, useEffect } from 'react';

const CoachQuote = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  // Quote to be displayed with typewriter effect
  const fullQuote = '"Life is a journey, not a destination."';
  
  // Typewriter effect
  useEffect(() => {
    if (isTyping && displayedText.length < fullQuote.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullQuote.slice(0, displayedText.length + 1));
      }, 100);
      
      return () => clearTimeout(timeout);
    } else if (displayedText.length === fullQuote.length) {
      setIsTyping(false);
    }
  }, [displayedText, isTyping, fullQuote]);
  
  // Restart typing effect when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isTyping && displayedText.length === fullQuote.length) {
          setTimeout(() => {
            setDisplayedText('');
            setIsTyping(true);
          }, 3000);
        }
      },
      { threshold: 0.5 }
    );
    
    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }
    
    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current);
      }
    };
  }, [isTyping, displayedText, fullQuote]);

  return (
    <section
      id="coach-quote"
      ref={sectionRef}
      className="py-24 bg-neutral-dark text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6 text-lg">
            <p>
              Coach Jeffire, who guided me from childhood through college, often shared this timeless wisdom:
            </p>
            
            <div 
              ref={quoteRef}
              className="bg-neutral-light/10 p-8 rounded-lg text-center"
            >
              <p className="text-2xl md:text-3xl font-quote font-bold">
                {displayedText}
                <span className={`inline-block h-6 w-1 bg-primary-blue ${isTyping ? 'animate-blink' : 'opacity-0'}`}></span>
              </p>
            </div>
            
            <p>
              Though he didn't create this famous saying, his way of living it made these words feel uniquely his. 
              This philosophy became central to how I approach both wrestling and life's challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachQuote; 
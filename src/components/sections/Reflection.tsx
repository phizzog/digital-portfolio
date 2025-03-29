'use client';

import { useRef } from 'react';

const Reflection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      id="reflection" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-primary-blue to-primary-red text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-10">
          This I Believe
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6 text-lg">
          <p className="text-xl md:text-2xl font-quote italic mb-8">
            The journey is more valuable than the destination.
          </p>
          
          <p>
            When my wrestling career ended abruptly, I felt like I had lost my destination—the 
            championships, the medals, the recognition I had worked toward for so many years. 
            But what I soon discovered was that wrestling had never been about those things.
          </p>
          
          <p>
            It was about the journey: the early morning practices, the bonds with teammates, 
            the lessons from coaches, the mental fortitude developed through victory and defeat, 
            and the global perspective gained from competing internationally.
          </p>
          
          <p>
            Had I remained fixated on the destination—becoming a champion wrestler—I would have 
            seen my injury as the end of everything. Instead, by valuing the journey, I recognized 
            that all I had learned and experienced was transferable to new paths.
          </p>
          
          <p>
            My transition to AI development wasn't starting over—it was continuing a journey 
            with new tools and perspectives. The analytical thinking, perseverance, and adaptability 
            cultivated through wrestling became the foundation for my success in a completely 
            different field.
          </p>
          
          <p className="text-xl font-heading font-bold mt-10">
            Life's greatest value is found not in reaching destinations, 
            but in the transformative power of the journey itself.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Reflection; 
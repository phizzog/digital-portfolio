'use client';

import { useRef } from 'react';

const Introduction = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="introduction"
      ref={sectionRef}
      className="py-24 bg-neutral-dark text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center text-white">
            Where It All Began
          </h2>
          
          <div className="space-y-6 text-lg">
            <p className="text-xl font-quote italic">
              I was eight years old when I first stepped onto a wrestling mat, nervous but eager,
              with no idea how that moment would shape the rest of my life.
            </p>
            
            <p>
              My first coach was Coach Jeffire, who quickly became more than just an instructor—he became my mentor.
              A former head coach at the University of Findlay, his knowledge of the sport and life philosophy left 
              a lasting impression on me. Every practice with him reinforced not just technique, but values that 
              would guide me well beyond the mat.
            </p>
            
            <p>
              Another significant influence was Coach Miron, whose impressive credentials—a national championship 
              at University of Findlay and a Soviet national championship—made his guidance invaluable. My dad and I 
              were so committed to my training that we&apos;d make an 8-hour round trip every other weekend for five years 
              straight to attend his wrestling camps. Those long drives, often starting before dawn and ending well after 
              dark, were filled with discussions about technique, mental preparation, and the sacrifices necessary for greatness.
            </p>
            
            <p>
              The deep connections to these mentors naturally led me to the University of Findlay. While Coach Jeffire was 
              no longer head coach by then, his influence had shaped the program&apos;s philosophy. The familiar &quot;Life is a journey, 
              not a destination&quot; wisdom that he often shared became the foundation of my approach to not just wrestling, but 
              to all aspects of life.
            </p>
            
            <p>
              Wrestling transformed from a sport into a way of life. Every match, every victory, and especially every defeat 
              taught me something valuable. The discipline required to maintain weight, the mental fortitude needed to face 
              opponents, and the resilience to bounce back after losses shaped me in ways I couldn&apos;t fully appreciate until 
              much later. Those countless hours on the road with my dad showed me that commitment isn&apos;t just about showing up—it&apos;s 
              about going the extra mile, quite literally, for what you believe in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction; 
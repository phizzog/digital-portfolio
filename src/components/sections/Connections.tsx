'use client';

import Image from 'next/image';
import { useRef } from 'react';

const Connections = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="connections"
      ref={sectionRef}
      className="py-20 bg-neutral-dark text-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center text-white">
            Full Circle: From Wrestler to Coach
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1 prose prose-lg max-w-none prose-invert">
              <p className="mb-4">
                Just a year after my transformative trip to Sweden, something remarkable happened—the 
                tables turned, and I found myself hosting the Swedish team on American soil. This time, 
                however, I wasn't the visitor or the student; I was the coach.
              </p>
              
              <p className="mb-4">
                Standing on the edge of the wrestling mat, watching these athletes I'd trained alongside 
                now learning from me, I felt a profound sense of the journey coming full circle. The nervousness 
                I'd felt in Sweden had transformed into confidence, the questions into answers I could now share.
              </p>
              
              <p className="mb-4">
                What struck me most was how the connections we'd formed transcended both distance and time. 
                Wrestling had initially brought us together, but our bond had evolved far beyond the sport. We 
                shared meals, stories, and laughter that bridged our cultural differences. Watching American 
                and Swedish wrestlers training together, learning from each other's styles and approaches, I saw 
                a living example of how sport creates understanding across borders.
              </p>
              
              <p className="mb-4">
                These weren't just temporary acquaintances or training partners—they had become lifelong connections. 
                In those moments, watching the Swedish flag displayed proudly in our American wrestling room, I realized 
                that the true value of my wrestling journey wasn't in the medals or achievements. It was in these 
                human connections that would continue long after the final whistle.
              </p>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-lg shadow-xl mb-3">
                <Image
                  src="/images/sweden-family.png"
                  alt="Swedish wrestling team visiting America with Kenny as coach"
                  width={1000}
                  height={750}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <p className="text-center text-sm font-bold text-white">Stockholm to Detroit: United by Wrestling at Clinton Township</p>
            </div>
          </div>
          
          <div className="bg-neutral-light/10 p-6 rounded-lg shadow-lg backdrop-blur-sm">
            <blockquote className="text-lg md:text-xl font-quote italic text-center mb-4">
              "The greatest gift of sport isn't what it helps you achieve, but who it helps you become and the connections it creates along the way."
            </blockquote>
            <p className="text-right font-heading font-bold">— Lesson learned on the mat</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connections; 
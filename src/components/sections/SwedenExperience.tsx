'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

type Location = {
  name: string;
  description: string;
  coordinates: { x: number; y: number };
};

const SwedenExperience = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const locations: Location[] = [
    {
      name: "Västerås",
      description: "My home base during the 2023 trip, where I trained with local wrestlers and experienced Swedish wrestling techniques firsthand.",
      coordinates: { x: 55, y: 40 }
    },
    {
      name: "Enköping",
      description: "Jarko&apos;s hometown where he welcomed me into his home. Here, experiencing different cultures, I realized the journey itself was more valuable than any destination.",
      coordinates: { x: 60, y: 50 }
    },
    {
      name: "Stockholm",
      description: "Sweden&apos;s beautiful capital, where I visited historic sites and reflected on how this journey was shaping my perspective on wrestling and life.",
      coordinates: { x: 65, y: 60 }
    }
  ];

  const handleLocationClick = (locationName: string) => {
    setActiveLocation(locationName === activeLocation ? null : locationName);
  };

  return (
    <section id="sweden-experience" className="py-20 bg-neutral-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center">
          My Swedish Wrestling Journey
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-lg">
            <p>
              The moment I stepped off the plane in Sweden in 2023, the butterflies in my stomach reminded me how far from home I truly was. This wasn&apos;t just another tournament—it was my first time representing myself internationally in Västerås, without my team or coaches beside me.
            </p>
            
            <p>
              I still remember my hands shaking as I met Jarko, a veteran world champion whose reputation preceded him. What began as a training partnership quickly evolved into a friendship. &quot;Wrestling is not about dominating your opponent,&quot; he told me over coffee that first morning, his accent thick but his wisdom clear. &quot;It&apos;s about understanding yourself.&quot; In that moment, something shifted in my perspective.
            </p>
            
            <p>
              One of the most profound experiences was visiting Jarko&apos;s home in Enköping. As he showed me around his community and introduced me to different cultural aspects of Swedish life, I had an epiphany that would change my outlook forever: while I had been focused on destinations—winning championships, achieving titles—it was actually the journey that held the true value. These life experiences weren&apos;t just side effects of pursuing wrestling; they were the hidden treasures of the path itself.
            </p>
            
            <p>
              By the time I visited Stockholm and eventually boarded my return flight, I wasn&apos;t just bringing home memories of beautiful architecture—I was carrying new perspectives that would later prove invaluable when life threw its biggest challenge my way. The friendship formed with Jarko created a connection that spanned continents, and would later become critical during my transition away from competitive wrestling.
            </p>
          </div>
          
          <div 
            ref={mapRef}
            className="relative h-[500px] w-full bg-neutral-medium/20 rounded-lg overflow-hidden shadow-lg"
          >
            {/* Sweden map background */}
            <div className="absolute inset-0">
              <Image
                src="/images/sweden-map.jpg"
                alt="Map of Sweden"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Interactive locations */}
            {locations.map((location) => (
              <div
                key={location.name}
                className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10`}
                style={{ 
                  left: `${location.coordinates.x}%`, 
                  top: `${location.coordinates.y}%` 
                }}
                onClick={() => handleLocationClick(location.name)}
              >
                <div className={`
                  relative w-6 h-6 bg-primary-red rounded-full 
                  ${location.name === "Enköping" ? 'animate-pulse' : ''}
                  ${activeLocation === location.name ? 'scale-150' : 'scale-100'}
                  transition-transform duration-300
                `}>
                  <div className="absolute -inset-2 bg-primary-red/30 rounded-full"></div>
                </div>
                
                {/* Location tooltip */}
                {activeLocation === location.name && (
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-64 bg-neutral-dark text-white p-4 rounded-lg shadow-lg z-20">
                    <h3 className="font-heading font-bold text-lg mb-2">{location.name}</h3>
                    <p className="text-sm">{location.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwedenExperience; 
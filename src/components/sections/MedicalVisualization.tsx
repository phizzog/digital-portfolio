'use client';

import { useState } from 'react';
import Image from 'next/image';

const MedicalVisualization = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);

  return (
    <section className="py-20 bg-neutral-dark text-white" id="medical-visualization">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center">
          The Injury That Changed My Path
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-lg">
            <p>
              In 2022, I began experiencing the first symptoms of what would eventually become 
              a career-ending injury. At first, the pain in my neck seemed manageable – 
              something I could push through as wrestlers often do. I continued training, 
              competing with the discomfort.
            </p>
            <p>
              When the pain persisted, I underwent three months of physical therapy. It helped 
              temporarily, but the symptoms returned worse than before. Determined to 
              overcome this challenge, I attacked my recovery from every angle – more physical 
              therapy, red light therapy sessions, daily ice baths, anti-inflammatory cream 
              applications, and stretching three times a day.
            </p>
            <p>
              I entered my senior year seemingly pain-free, hopeful that my dedication to 
              recovery had worked. Then, halfway through the season, the worst symptoms yet 
              appeared. Medical imaging revealed the devastating truth: spinal stenosis had 
              become severe in my C5-C6 vertebrae, creating dangerous pressure on my spinal 
              cord.
            </p>
            <p>
              The neurologist was clear: continuing to wrestle would risk permanent nerve 
              damage or worse. The sport that had defined my identity for over a decade was 
              suddenly no longer an option.
            </p>
            <p>
              Initially devastated, I came to realize that this moment wasn&apos;t an ending but a 
              redirection. The discipline, perseverance, and analytical thinking I&apos;d developed 
              through wrestling were perfectly transferable to other pursuits—particularly my 
              growing interest in artificial intelligence.
            </p>
          </div>
          
          <div 
            className="relative w-full h-full min-h-[500px] rounded-lg overflow-hidden"
            onMouseEnter={() => setIsHighlighted(true)}
            onMouseLeave={() => setIsHighlighted(false)}
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/xray.png"
                alt="X-ray of cervical spine showing spinal stenosis"
                fill
                className="object-contain"
                priority
              />
              
              {/* Highlight circle for the affected area */}
              <div 
                className={`absolute left-1/2 top-2/3 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 
                ${isHighlighted ? 'border-primary-red animate-pulse' : 'border-primary-red'} 
                transition-all duration-300 cursor-pointer z-10`}
              >
                {isHighlighted && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-neutral-dark text-white p-3 rounded shadow-lg w-64">
                    <h3 className="font-heading text-lg font-bold mb-2">Cervical Spine (C5-C6)</h3>
                    <p className="text-sm">
                      The severe stenosis in this area created dangerous pressure on my spinal cord, despite months of intensive rehabilitation efforts to prevent it from worsening.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalVisualization; 
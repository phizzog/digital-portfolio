'use client';

import { useRef } from 'react';

const CareerTransition = () => {
  return (
    <section id="transition" className="py-20 bg-neutral-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center">
          Carving My New Path
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 text-lg">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              From Wrestling Mat to AI Development
            </h3>
            
            <p>
              When wrestling was no longer an option, I had to reconsider my entire future. Had I 
              continued wrestling, I would have stayed at the University of Findlay—a great 
              school, but one that lacked the advanced AI programs I was beginning to find 
              fascinating.
            </p>
            
            <p>
              After much reflection, I made the difficult decision to transfer to a graduate 
              program specializing in Artificial Intelligence. This meant leaving behind the team 
              that had become my family and the sport that had defined me—but it also meant 
              embracing a future with exciting new possibilities.
            </p>
            
            <p>
              The analytical skills I had developed as a wrestler—studying opponents, identifying 
              patterns, and adapting strategies—translated surprisingly well to the world of AI. 
              The discipline and perseverance cultivated through years of training gave me the 
              mental fortitude to tackle complex algorithms and challenging projects.
            </p>
            
            <p>
              What initially felt like an ending was actually a powerful redirection. The journey 
              hadn&apos;t stopped—it had simply taken an unexpected but rewarding turn.
            </p>
          </div>
          
          <div className="flex flex-col h-full">
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <div className="relative pt-[56.25%]">
                <iframe 
                  src="https://www.youtube.com/embed/Op1XMnAzk9o" 
                  title="Kenny Snyder - NVIDIA RAG Project" 
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-heading font-bold mb-2">Award-Winning AI Project</h3>
              <p>
                My RAG implementation won a prize in the NVIDIA Retrieval Augmented Generation and 
                LlamaIndex contest, showcasing my growth in AI development.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-heading font-bold text-center mb-8">Skills Transferred From Wrestling to AI</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-medium/10 rounded-lg p-6 text-center hover:bg-primary-blue/20 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-primary-blue">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-lg mb-2">Pattern Recognition</h4>
              <p className="text-sm">
                Wrestling taught me to identify patterns in opponents&apos; movements—now I apply that to recognize patterns in data.
              </p>
            </div>
            
            <div className="bg-neutral-medium/10 rounded-lg p-6 text-center hover:bg-primary-red/20 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-primary-red">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-lg mb-2">Mental Toughness</h4>
              <p className="text-sm">
                The resilience built through intense training and competition prepared me for the challenges of complex AI projects.
              </p>
            </div>
            
            <div className="bg-neutral-medium/10 rounded-lg p-6 text-center hover:bg-secondary-blue/20 transition-colors">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 text-secondary-blue">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-heading font-bold text-lg mb-2">Adaptability</h4>
              <p className="text-sm">
                Wrestling demands quick strategic adjustments—a skill that&apos;s invaluable when working with rapidly evolving AI technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTransition; 
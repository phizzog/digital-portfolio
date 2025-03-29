'use client';

import { useState, useEffect, useRef } from 'react';

type Connection = {
  id: number;
  name: string;
  role: string;
  country: string;
  coordinates: { x: number; y: number };
};

const FriendshipNetwork = () => {
  const [activeConnection, setActiveConnection] = useState<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const connections: Connection[] = [
    { 
      id: 1, 
      name: "Kenny Snyder", 
      role: "Wrestler & AI Developer", 
      country: "USA", 
      coordinates: { x: 0.25, y: 0.4 } 
    },
    { 
      id: 2, 
      name: "Jarko Lindberg", 
      role: "Mentor & European Champion", 
      country: "Sweden", 
      coordinates: { x: 0.55, y: 0.24 } 
    },
    { 
      id: 3, 
      name: "Miguel Santos", 
      role: "Training Partner", 
      country: "Brazil", 
      coordinates: { x: 0.35, y: 0.7 } 
    },
    { 
      id: 4, 
      name: "Hiroshi Tanaka", 
      role: "Coach & Technique Specialist", 
      country: "Japan", 
      coordinates: { x: 0.85, y: 0.38 } 
    },
    { 
      id: 5, 
      name: "Alex Dimitrov", 
      role: "Competition Rival & Friend", 
      country: "Bulgaria", 
      coordinates: { x: 0.6, y: 0.35 } 
    }
  ];

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: 400, // Fixed height
      });
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: 400,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw connections from Kenny to everyone else
    const kenny = connections[0];
    const kennyX = kenny.coordinates.x * canvas.width;
    const kennyY = kenny.coordinates.y * canvas.height;

    connections.forEach((connection, i) => {
      if (i === 0) return; // Skip Kenny (self)

      const x = connection.coordinates.x * canvas.width;
      const y = connection.coordinates.y * canvas.height;

      // Draw line from Kenny to this connection
      ctx.beginPath();
      ctx.moveTo(kennyX, kennyY);
      ctx.lineTo(x, y);
      
      // Style based on whether this connection is active
      if (activeConnection === connection.id) {
        ctx.strokeStyle = '#D32F2F'; // primary-red
        ctx.lineWidth = 3;
      } else {
        ctx.strokeStyle = '#4FC3F7'; // secondary-blue
        ctx.lineWidth = 1.5;
      }
      
      ctx.stroke();
    });

  }, [connections, activeConnection, dimensions]);

  return (
    <section id="friendship-network" className="py-20 bg-neutral-dark text-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-center">
          Global Wrestling Connections
        </h2>
        
        <p className="text-lg text-center max-w-3xl mx-auto mb-10">
          Wrestling connected me with remarkable individuals across the globe, 
          forming a network that would later support my transition to AI development.
        </p>
        
        <div 
          ref={containerRef}
          className="relative bg-neutral-medium/20 rounded-lg p-4 mb-8 h-[400px]"
        >
          <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full z-10" 
          />
          
          {connections.map((connection) => (
            <div
              key={connection.id}
              className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${connection.coordinates.x * 100}%`,
                top: `${connection.coordinates.y * 100}%`,
              }}
              onMouseEnter={() => setActiveConnection(connection.id)}
              onMouseLeave={() => setActiveConnection(null)}
            >
              <div 
                className={`
                  w-4 h-4 rounded-full 
                  ${connection.id === 1 ? 'bg-primary-red' : 'bg-secondary-blue'}
                  ${activeConnection === connection.id ? 'scale-150' : 'scale-100'}
                  transition-transform duration-300 cursor-pointer
                `}
              />
              
              {activeConnection === connection.id && (
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-neutral-dark p-3 rounded-lg shadow-lg z-30 w-48">
                  <p className="font-heading font-bold text-sm">{connection.name}</p>
                  <p className="text-xs text-neutral-medium mb-1">{connection.country}</p>
                  <p className="text-xs">{connection.role}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="prose prose-invert max-w-3xl mx-auto">
          <p>
            These connections represent more than just friendships—they are the foundation of my global perspective. 
            From Jarko's philosophical approach to wrestling in Sweden to Hiroshi's technical precision from Japan, 
            each relationship contributed unique insights that shaped my career.
          </p>
          <p>
            When I later transitioned to AI development, this network became invaluable. Miguel, now working in tech in Brazil, 
            introduced me to programming concepts. Alex, who had also pivoted to a technology career, shared resources and advice 
            during my transition.
          </p>
          <p>
            The lesson was clear: in wrestling and in life, we are stronger through our connections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FriendshipNetwork; 
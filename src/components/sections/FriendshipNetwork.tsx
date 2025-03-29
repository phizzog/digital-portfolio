'use client';

import { useRef, useEffect, useState, useMemo } from 'react';

type Friend = {
  id: number;
  name: string;
  location: string;
  story: string;
  x: number;
  y: number;
};

const FriendshipNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeFriend, setActiveFriend] = useState<Friend | null>(null);

  // Wrap connections in useMemo
  const connections = useMemo(() => [
    { id: 1, name: 'Jarko', location: 'Enköping, Sweden', story: 'Met training internationally, taught me about the journey.', x: 150, y: 100 },
    { id: 2, name: 'Coach Jeffire', location: 'Findlay, Ohio', story: 'My childhood mentor who instilled core values.', x: 300, y: 250 },
    { id: 3, name: 'College Teammates', location: 'Findlay, Ohio', story: 'The brotherhood that pushed me daily.', x: 450, y: 150 },
    { id: 4, name: 'AI Mentors', location: 'Graduate Program', story: 'Guiding my transition into a new field.', x: 600, y: 300 },
    { id: 5, name: 'Swedish Team', location: 'Stockholm/Västerås', story: 'Friendships forged across cultures through sport.', x: 750, y: 100 },
  ], []); // Empty dependency array ensures it's only created once

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: { x: number; y: number; vx: number; vy: number; opacity: number }[] = [];
    const numParticles = 50;

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    const draw = () => {
      // Responsive canvas size
      const container = canvas.parentElement;
      if (container) {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
      }
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;

      // Draw connections lines
      ctx.strokeStyle = 'rgba(79, 195, 247, 0.3)'; // Light blue, semi-transparent
      ctx.lineWidth = 1;
      for (let i = 0; i < connections.length; i++) {
        for (let j = i + 1; j < connections.length; j++) {
          ctx.beginPath();
          ctx.moveTo(connections[i].x * (canvas.width / 900), connections[i].y * (canvas.height / 400));
          ctx.lineTo(connections[j].x * (canvas.width / 900), connections[j].y * (canvas.height / 400));
          ctx.stroke();
        }
      }

      // Draw friend nodes
      connections.forEach(friend => {
        const isHovering = activeFriend && activeFriend.id === friend.id;
        const radius = isHovering ? 15 : 10;
        const color = isHovering ? '#D32F2F' : '#4FC3F7'; // Red when active, blue otherwise
        
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(
          friend.x * (canvas.width / 900), 
          friend.y * (canvas.height / 400), 
          radius, 
          0, 
          Math.PI * 2
        );
        ctx.fill();
        ctx.shadowBlur = isHovering ? 20 : 10;
        ctx.shadowColor = color;
        ctx.fill(); // Fill again to apply shadow
        ctx.shadowBlur = 0; // Reset shadow
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  // Include connections in the dependency array as it's used inside
  }, [activeFriend, connections]);

  const handleMouseEnter = (friend: Friend) => {
    setActiveFriend(friend);
  };

  const handleMouseLeave = () => {
    setActiveFriend(null);
  };

  return (
    <section id="friendship-network" className="py-20 bg-neutral-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10 text-center">
          The Network That Supported My Journey
        </h2>
        <div className="relative h-[400px] mb-8">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          
          {/* Render nodes as divs for hover interactions and tooltips */}
          <div className="absolute inset-0 w-full h-full">
            {connections.map(friend => (
              <div
                key={friend.id}
                className={`absolute w-5 h-5 rounded-full cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${activeFriend && activeFriend.id === friend.id ? 'bg-primary-red scale-150 z-20' : 'bg-secondary-blue scale-100 z-10'}`}
                style={{
                  left: `${(friend.x / 900) * 100}%`, // Convert absolute coords to percentage
                  top: `${(friend.y / 400) * 100}%`
                }}
                onMouseEnter={() => handleMouseEnter(friend)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Tooltip */} 
                {activeFriend && activeFriend.id === friend.id && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-neutral-light text-neutral-dark p-3 rounded shadow-lg z-30">
                    <h3 className="font-heading font-bold text-lg mb-1">{friend.name}</h3>
                    <p className="text-sm italic mb-1">{friend.location}</p>
                    <p className="text-sm">{friend.story}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="text-center text-lg italic">
          Hover over the nodes to see the connections that shaped my path—from mentors and teammates to friends made across the globe. Each played a vital role in my growth, reminding me that the journey isn&apos;t walked alone.
        </p>
      </div>
    </section>
  );
};

export default FriendshipNetwork; 
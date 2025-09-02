import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

// Particle component for the twinkling red dots effect
const Particle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div 
        className="absolute rounded-full bg-red-500 animate-twinkle"
        style={style}
    />
);

const About: React.FC = () => {
    // Generate styles for particles to be scattered across the section
    const particles = React.useMemo(() => {
        const particleStyles = [];
        for (let i = 0; i < 30; i++) {
            const size = Math.random() * 4 + 1; // size between 1px and 5px
            particleStyles.push({
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${Math.random() * 3 + 2}s`, // duration between 2s and 5s
                boxShadow: '0 0 8px #ff0000, 0 0 12px #ff0000'
            });
        }
        return particleStyles;
    }, []);

  return (
    <Section id="about" title="" className="relative !py-32 md:!py-40 overflow-hidden bg-primary/50 backdrop-blur-sm group">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1608244589026-1a73da71b448?q=80&w=2070&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent"></div>
      
      {/* Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {particles.map((style, i) => <Particle key={i} style={style} />)}
      </div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Large Background Title */}
        <h2 className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-7xl sm:text-9xl md:text-[12rem] lg:text-[15rem] font-bold text-white/5 tracking-widest pointer-events-none uppercase">
          About Us
        </h2>

        {/* Foreground Title */}
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 text-[#f87171] uppercase tracking-wider">
          About Us
        </h3>

        {/* Content Box */}
        <motion.div 
          className="relative max-w-4xl mx-auto p-6 md:p-8 bg-black/40 backdrop-blur-sm rounded-2xl"
          whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300 } }}
        >
          {/* Dot pattern overlay inside the box */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(239, 68, 68, 0.2) 1px, transparent 1px)',
              backgroundSize: '10px 10px'
            }}
          ></div>

          {/* Glowing border effect using pseudo-element */}
          <div className="absolute -inset-px rounded-2xl border-2 border-red-500/50 group-hover:border-red-400 transition-all duration-300"></div>
          <div className="absolute -inset-1 rounded-2xl border-2 border-red-700/80 blur-lg opacity-70"></div>

          <div className="relative z-10 space-y-4 text-lg text-gray-200/90 font-light leading-relaxed">
            <p>
              HackQubit is where coding meets Formula 1 precision. We're not just hosting a hackathon—we're
              launching a high-speed innovation challenge that fuels creativity and competition.
            </p>
            <p>
              Join developers, designers, and dreamers from around the country as we sprint through 24 hours of
              pure tech adrenaline—collaborating, building, and racing toward impact.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';

// Re-using the Particle component for consistency
const Particle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div 
        className="absolute rounded-full bg-red-500 animate-twinkle"
        style={style}
    />
);

// --- SVG Icons for Venue Details ---

const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>;
const DateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>;
const DurationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const CapacityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>;


const Venue: React.FC = () => {
    const particles = React.useMemo(() => {
        const particleStyles = [];
        for (let i = 0; i < 30; i++) {
            const size = Math.random() * 4 + 1;
            particleStyles.push({
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                boxShadow: '0 0 8px #ff0000, 0 0 12px #ff0000'
            });
        }
        return particleStyles;
    }, []);

    const venueDetails = [
        {
            icon: <LocationIcon />,
            title: 'Location',
            details: ['RVSCET Jamshedpur', 'Jharkhand, India'],
            color: 'red'
        },
        {
            icon: <DateIcon />,
            title: 'Date',
            details: ['October 7-8, 2025'],
            color: 'blue'
        },
        {
            icon: <DurationIcon />,
            title: 'Duration',
            details: ['24 Hours Non-Stop', '9:00 AM Start'],
            color: 'gray'
        },
        {
            icon: <CapacityIcon />,
            title: 'Capacity',
            details: ['200+ Participants', 'Teams of 2-4'],
            color: 'green'
        }
    ];

  return (
    <Section id="venue" title="" className="relative !py-32 md:!py-40 overflow-hidden">
        
        {/* Particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            {particles.map((style, i) => <Particle key={i} style={style} />)}
        </div>
        
        {/* Background Watermark */}
        <h2 className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-7xl sm:text-9xl md:text-[12rem] lg:text-[15rem] font-bold text-white/5 tracking-widest pointer-events-none uppercase -rotate-12">
            Racefloor
        </h2>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
            <div className="grid md:grid-cols-5 gap-12 items-center">
                 <div className="md:col-span-2">
                    <motion.div 
                        className="relative w-full p-6 md:p-8 bg-black/40 backdrop-blur-sm rounded-2xl"
                        whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300 } }}
                    >
                        {/* Dot pattern overlay */}
                        <div 
                            className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(rgba(239, 68, 68, 0.2) 1px, transparent 1px)',
                                backgroundSize: '10px 10px'
                            }}
                        ></div>
                        
                        {/* Glowing border effect */}
                        <div className="absolute -inset-px rounded-2xl border-2 border-red-500/50"></div>
                        <div className="absolute -inset-1 rounded-2xl border-2 border-red-700/80 blur-lg opacity-70"></div>
                        
                        <div className="relative z-10">
                            <h3 className="text-center text-3xl font-bold text-gray-200 uppercase tracking-[0.2em] mb-10">
                                Venue Details
                            </h3>
                            <div className="space-y-8">
                                {venueDetails.map(item => (
                                    <div key={item.title} className="flex items-start space-x-6">
                                        <div className={`
                                            flex-shrink-0 p-3 rounded-lg border-2
                                            ${item.color === 'red' && 'border-red-500/80 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.4)]'}
                                            ${item.color === 'blue' && 'border-blue-500/80 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.4)]'}
                                            ${item.color === 'gray' && 'border-gray-500/80 text-gray-400 shadow-[0_0_15px_rgba(107,114,128,0.4)]'}
                                            ${item.color === 'green' && 'border-green-500/80 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.4)]'}
                                        `}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-white">{item.title}</h4>
                                            {item.details.map((line, i) => (
                                                <p key={i} className="text-gray-300 text-lg">{line}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                 </div>
                 <div className="md:col-span-3">
                    <motion.div 
                        className="relative w-full aspect-video p-1"
                        animate={{ y: ["-3%", "3%"] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "reverse",
                            duration: 6,
                            ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.02, y: 0, transition: { type: 'spring', stiffness: 300 } }}
                    >
                        <div className="absolute -inset-px rounded-2xl border-2 border-accent/50"></div>
                        <div className="absolute -inset-1 rounded-2xl border-2 border-accent/80 blur-lg opacity-70"></div>
                        <iframe
                            className="relative w-full h-full rounded-xl border-2 border-accent/20 filter grayscale(1) invert(0.9) contrast(0.8)"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.895162137912!2d86.24893451543883!3d22.76913498508129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3f3b1a7397b%3A0x8e831558856c9a1!2sRVS%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="RVS College of Engineering and Technology Location"
                        ></iframe>
                    </motion.div>
                 </div>
            </div>
        </div>
    </Section>
  );
};

export default Venue;
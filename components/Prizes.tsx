

import React from 'react';
import { PRIZES } from '../constants';
// FIX: Import Variants from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

// Re-using the Particle component for consistency
const Particle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div
        className="absolute rounded-full bg-red-500 animate-twinkle"
        style={style}
    />
);

// --- SVG Icons for Prizes ---
const ChampionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M9.17 9.17a3 3 0 0 0 5.66 0" />
    </svg>
);

const RunnerUpIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
);

const ThirdPlaceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400">
        <path d="M12 2c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6z"/>
        <path d="m8.5 14 3.5 4 3.5-4"/>
        <path d="m7 18 2 4h6l2-4"/>
    </svg>
);

const ICONS = [
    <ChampionIcon />,
    <RunnerUpIcon />,
    <ThirdPlaceIcon />
];

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const PrizeCard: React.FC<{ prize: typeof PRIZES[0], index: number }> = ({ prize, index }) => {
    const colorClasses = {
        yellow: 'border-yellow-400/80 text-yellow-400',
        gray: 'border-gray-400/80 text-gray-400',
        orange: 'border-orange-400/80 text-orange-400',
    };
    const glowClasses = {
        yellow: 'border-yellow-500/80',
        gray: 'border-gray-500/80',
        orange: 'border-orange-500/80',
    };
    const shadowClasses = {
         yellow: 'shadow-[0_0_25px_rgba(250,204,21,0.5)]',
         gray: 'shadow-[0_0_25px_rgba(156,163,175,0.4)]',
         orange: 'shadow-[0_0_25px_rgba(251,146,60,0.5)]',
    };

    return (
        <motion.div
            variants={cardVariants}
            className={`relative w-full max-w-sm p-6 bg-black/40 backdrop-blur-sm rounded-2xl transition-transform duration-300 ${index === 0 ? 'md:-translate-y-4' : ''}`}
            whileHover={{ y: index === 0 ? -24 : -10, transition: { type: 'spring', stiffness: 300 } }}
        >
            {/* Dot pattern overlay */}
            <div
                className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(rgba(239, 68, 68, 0.15) 1px, transparent 1px)',
                    backgroundSize: '10px 10px'
                }}
            ></div>

            {/* Glowing border effect */}
            <div className={`absolute -inset-px rounded-2xl border-2 ${colorClasses[prize.color]}`}></div>
            <div className={`absolute -inset-1 rounded-2xl border-2 ${glowClasses[prize.color]} blur-lg opacity-70`}></div>

            <div className="relative z-10 text-center flex flex-col items-center h-full">
                <div className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold border-2 ${colorClasses[prize.color]} ${shadowClasses[prize.color]}`}>
                    {prize.rank}
                </div>

                <div className={`mb-4 w-20 h-20 flex items-center justify-center rounded-full bg-black/30 border ${colorClasses[prize.color]}`}>
                    {ICONS[index]}
                </div>
                
                <h3 className={`text-xl font-bold uppercase tracking-wider mb-2 ${colorClasses[prize.color]}`}>{prize.title}</h3>
                <p className="font-mono text-4xl lg:text-5xl font-bold text-gray-200 my-2 tracking-tighter" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)'}}>{prize.amount}</p>
                <p className="text-gray-400 mt-4 text-sm">{prize.description}</p>
            </div>
        </motion.div>
    );
};


const Prizes: React.FC = () => {
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

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
    <motion.section 
        id="prizes" 
        className="relative py-32 md:py-40 overflow-hidden bg-primary/50 backdrop-blur-sm"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
    >
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-primary/80 via-primary/50 to-transparent"></div>
        
        {/* Particles */}
        <div className="absolute inset-0 z-0 pointer-events-none">
            {particles.map((style, i) => <Particle key={i} style={style} />)}
        </div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Background Title */}
            <h2 className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-7xl sm:text-9xl md:text-[12rem] lg:text-[15rem] font-bold text-white/5 tracking-widest pointer-events-none uppercase">
                Prizes
            </h2>

            {/* Foreground Title */}
            <h3 className="text-3xl sm:text-4xl font-bold mb-16 text-[#f87171] uppercase tracking-wider">
                Prizes
            </h3>

            {/* Prize Cards */}
            <motion.div 
                className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                 {PRIZES.map((prize, index) => (
                    <PrizeCard key={prize.rank} prize={prize} index={index} />
                ))}
            </motion.div>
        </div>
    </motion.section>
    );
};

export default Prizes;
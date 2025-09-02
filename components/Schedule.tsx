

import React from 'react';
import { SCHEDULE_ITEMS } from '../constants';
// FIX: Import Variants from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

// Re-using the Particle component for consistency
const Particle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div
        className="absolute rounded-full bg-red-500 animate-twinkle"
        style={style}
    />
);

// --- SVG Icons for Schedule Events ---
const RegistrationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>;
const OpeningCeremonyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10 15-2 5L4 21"/><path d="m14 9 2-5 4-1"/><path d="M12 12 6 6"/><circle cx="8" cy="8" r="2"/><circle cx="16" cy="16" r="2"/></svg>;
const HackingBeginsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>;
const LunchBreakIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4"/><path d="m18.36 5.64 2.83 2.83"/><path d="M22 12h-4"/><path d="m18.36 18.36-2.83-2.83"/><path d="M12 22v-4"/><path d="m5.64 18.36 2.83-2.83"/><path d="M2 12h4"/><path d="m5.64 5.64 2.83 2.83"/><path d="M12 12a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z"/></svg>;
const TechTalksIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 12a2 2 0 1 0-4 0 4 4 0 0 0-3.32 1.5A2.5 2.5 0 0 0 9 18h6a2.5 2.5 0 0 0 2.32-4.5A4 4 0 0 0 14 12Z"/><path d="M12 22v-2"/><path d="m19 19-1-1"/><path d="m5 19 1-1"/></svg>;
const DinnerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const EnergyBoostIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 10V3L4 14h7v7l9-11h-7Z"/></svg>;
const BreakfastIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const SubmissionIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/></svg>;
const JudgingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11.12 4.06 1.13 2.44.53 1.14 1.2.27 2.6.58-1.93 1.77-.4.36.1.51.3 1.2-2.28-1.27-.48-.27-.48.27-2.28 1.27.3-1.2.1-.51-.4-.36-1.93-1.77 2.6-.58 1.2-.27.53-1.14 1.13-2.44Z"/><path d="M12 14v7.45"/><path d="M8.29 14.53s-2.13 2-2.13 3.47S7.29 21.45 8 22"/><path d="M15.71 14.53s2.13 2 2.13 3.47S16.71 21.45 16 22"/><path d="M7 16H5"/><path d="M19 16h-2"/></svg>;
const ClosingCeremonyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M9.17 9.17a3 3 0 0 0 5.66 0"/></svg>;
const FinishLineTrophyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-300 filter drop-shadow-[0_0_5px_rgba(250,204,21,0.8)]">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M9.17 9.17a3 3 0 0 0 5.66 0" />
    </svg>
);


// Mapping icons to string names from constants
const ICONS: { [key: string]: React.FC } = {
    RegistrationIcon, OpeningCeremonyIcon, HackingBeginsIcon, LunchBreakIcon,
    TechTalksIcon, DinnerIcon, EnergyBoostIcon, BreakfastIcon,
    SubmissionIcon, JudgingIcon, ClosingCeremonyIcon
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const itemVariantsRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const Schedule: React.FC = () => {
    const particles = React.useMemo(() => {
        const particleStyles = [];
        for (let i = 0; i < 40; i++) {
            const size = Math.random() * 4 + 1;
            particleStyles.push({
                width: `${size}px`, height: `${size}px`,
                left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                boxShadow: '0 0 8px #ff0000, 0 0 12px #ff0000'
            });
        }
        return particleStyles;
    }, []);

    const colorClasses: { [key: string]: string } = {
        red: 'border-red-500/80 text-red-400',
        blue: 'border-blue-500/80 text-blue-400',
        green: 'border-green-500/80 text-green-400',
        yellow: 'border-yellow-500/80 text-yellow-400',
        gray: 'border-gray-500/80 text-gray-400',
    };

    const bgGlowClasses: { [key: string]: string } = {
        red: 'bg-red-500/80 shadow-[0_0_15px_rgba(239,68,68,0.5)]',
        blue: 'bg-blue-500/80 shadow-[0_0_15px_rgba(59,130,246,0.5)]',
        green: 'bg-green-500/80 shadow-[0_0_15px_rgba(34,197,94,0.5)]',
        yellow: 'bg-yellow-500/80 shadow-[0_0_15px_rgba(234,179,8,0.5)]',
        gray: 'bg-gray-500/80 shadow-[0_0_15px_rgba(107,114,128,0.5)]',
    };
    
    // SVG Racetrack Background
    const RacetrackBackground = () => (
        <svg
            className="absolute inset-0 w-full h-full z-0 opacity-20"
            preserveAspectRatio="none"
            viewBox="0 0 800 1800"
        >
            <path
                d="M 400 0 C 600 200, 200 400, 400 600 S 600 800, 400 1000 S 200 1200, 400 1400 S 600 1600, 400 1800"
                fill="none"
                stroke="#374151"
                strokeWidth="150"
            />
            <path
                d="M 400 0 C 600 200, 200 400, 400 600 S 600 800, 400 1000 S 200 1200, 400 1400 S 600 1600, 400 1800"
                fill="none"
                stroke="url(#road-stripes)"
                strokeWidth="5"
                strokeDasharray="30 30"
            />
            <defs>
                <linearGradient id="road-stripes">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="100%" stopColor="#f87171" />
                </linearGradient>
            </defs>
        </svg>
    );

  return (
    <motion.section 
        id="schedule" 
        className="relative py-32 md:py-40 overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-secondary/80 via-secondary/50 to-transparent"></div>
      <RacetrackBackground />
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((style, i) => <Particle key={i} style={style} />)}
      </div>
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-7xl sm:text-9xl md:text-[12rem] lg:text-[15rem] font-bold text-white/5 tracking-widest pointer-events-none uppercase">
          Schedule
        </h2>
        <h3 className="text-3xl sm:text-4xl font-bold mb-20 text-[#f87171] uppercase tracking-wider">
          Event Schedule
        </h3>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-gray-700/50"></div>
          
          {SCHEDULE_ITEMS.map((item, index) => {
            const IconComponent = ICONS[item.icon];
            const isLeft = index % 2 === 0;
            return (
              <motion.div 
                key={index} 
                className={`relative flex items-center mb-12`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={isLeft ? itemVariants : itemVariantsRight}
              >
                <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-gray-700/50 ${bgGlowClasses[item.color]}`}></div>
                
                <div className={`
                    w-full sm:w-[calc(50%-2rem)]
                    ${isLeft ? 'sm:mr-auto' : 'sm:ml-auto'}
                `}>
                  <motion.div 
                    className={`relative bg-black/40 backdrop-blur-sm p-4 rounded-xl text-left`}
                    whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 300 } }}
                  >
                    <div className="absolute -inset-px rounded-xl border-2 border-gray-600/50"></div>
                    <div className={`absolute -inset-px rounded-xl border ${colorClasses[item.color]} opacity-70 blur-md`}></div>
                    
                    <div 
                      className="absolute inset-0 rounded-xl opacity-50 pointer-events-none"
                      style={{
                        backgroundImage: 'radial-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px)',
                        backgroundSize: '8px 8px'
                      }}
                    ></div>

                    <div className={`relative z-10 flex items-start gap-4 ${isLeft ? 'sm:flex-row-reverse sm:text-right' : ''}`}>
                        <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-black/30 border ${colorClasses[item.color]}`}>
                            {IconComponent && <IconComponent />}
                        </div>
                        <div className="flex-grow">
                            <p className="text-sm font-light text-gray-400">{item.day} - <span className={`${colorClasses[item.color]} font-bold`}>{item.time}</span></p>
                            <h4 className="text-lg font-bold text-white uppercase tracking-wide my-1">{item.title}</h4>
                            <p className="text-sm text-gray-300/80">{item.description}</p>
                        </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

            {/* Finish Line Trophy */}
            <motion.div 
                className="relative flex justify-center" 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full w-0.5 h-12 bg-gray-700/50"></div>
                <div className="relative w-24 h-24 rounded-full flex items-center justify-center bg-yellow-500/10 border-2 border-yellow-400/60 shadow-[0_0_30px_rgba(250,204,21,0.5)]">
                    <div className="absolute inset-0 rounded-full bg-yellow-400/50 blur-xl animate-pulse opacity-80"></div>
                    <div className="relative z-10">
                        <FinishLineTrophyIcon />
                    </div>
                </div>
            </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Schedule;
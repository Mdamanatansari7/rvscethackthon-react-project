import React from 'react';
import { FOOTER_EVENT_INFO, FOOTER_QUICK_LINKS, FOOTER_LEGAL_LINKS, SOCIAL_LINKS, FOOTER_LOGOS } from '../constants';
import { Page } from '../App';
import { motion } from 'framer-motion';

// --- SVG Icons ---
const DiscordIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.36982C18.676 3.53202 16.883 2.92482 15 2.59042V2.58442C14.996 2.58442 14.992 2.58442 14.987 2.58842C13.561 2.29042 12.083 2.11642 10.574 2.08322C8.903 2.10042 7.262 2.27082 5.68 2.58842C5.676 2.58842 5.671 2.58442 5.667 2.58442C5.667 2.58442 5.667 2.58442 5.667 2.59042C3.129 2.92482 1.336 3.53202 -0.305 4.36982C-0.315 4.37382 -0.324 4.37882 -0.333 4.38482C-0.539 5.09482 -0.683 5.85762 -0.762 6.66922C-0.762 6.67322 -0.762 6.67722 -0.762 6.68222C-0.762 13.1278 1.942 18.9834 7.23 22.6306C7.234 22.6326 7.238 22.6346 7.243 22.6366C8.612 23.4478 10.054 24 11.562 24H12.438C13.946 24 15.388 23.4478 16.757 22.6366C16.761 22.6346 16.765 22.6326 16.77 22.6306C22.058 18.9834 24.762 13.1278 24.762 6.68222C24.762 6.67722 24.762 6.67322 24.762 6.66922C24.683 5.85762 24.539 5.09482 24.333 4.38482C24.324 4.37882 24.316 4.37382 24.306 4.36982L24.317 4.36982ZM8.63 16.4806C7.295 16.4806 6.183 15.3514 6.183 13.999C6.183 12.6466 7.295 11.5174 8.63 11.5174C9.965 11.5174 11.077 12.6466 11.077 13.999C11.077 15.3514 9.965 16.4806 8.63 16.4806ZM15.37 16.4806C14.035 16.4806 12.923 15.3514 12.923 13.999C12.923 12.6466 14.035 11.5174 15.37 11.5174C16.705 11.5174 17.817 12.6466 17.817 13.999C17.817 15.3514 16.705 16.4806 15.37 16.4806Z"/></svg>
);
const MailIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 21h-24v-18h24v18zm-2-16h-20v14h20v-14zm-10 9.882l-10-6.945v-1.937l10 7.118 10-7.118v1.937l-10 6.945z"/></svg>
);
const InstagramIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
);
const LinkedInIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
);

const ICONS: { [key: string]: React.FC } = {
    discord: DiscordIcon,
    mail: MailIcon,
    instagram: InstagramIcon,
    linkedin: LinkedInIcon
};

const Particle: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <div
        className="absolute rounded-full bg-blue-400/60 animate-twinkle"
        style={{
            ...style,
            boxShadow: '0 0 10px rgba(96,165,250,0.8), 0 0 20px rgba(59,130,246,0.6)'
        }}
    />
);

interface FooterProps {
    onNavigate: (page: Page) => void;
    onRegisterClick: () => void;
}

type LinkType = {
    title: string;
    id: string;
    isPage: boolean;
};

const Footer: React.FC<FooterProps> = ({ onNavigate, onRegisterClick }) => {
    const particles = React.useMemo(() => {
        const particleStyles = [];
        for (let i = 0; i < 40; i++) {
            const size = Math.random() * 4 + 1;
            particleStyles.push({
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
            });
        }
        return particleStyles;
    }, []);

    // A bit of a hack to know if we are on the homepage
    const isHomePage = !!document.getElementById('home');

    const handleLinkClick = (link: LinkType, isHomePage: boolean) => {
        if (link.id === 'register') {
            onRegisterClick();
        } else if (link.isPage) {
            onNavigate(link.id as Page);
        } else {
            if (isHomePage) {
                const targetElement = document.getElementById(link.id);
                if (targetElement) {
                    (window as any).lenis?.scrollTo(targetElement, { offset: -80 });
                }
            } else {
                onNavigate('home');
                setTimeout(() => {
                    const targetElement = document.getElementById(link.id);
                    if (targetElement) {
                        (window as any).lenis?.scrollTo(targetElement, { offset: -80 });
                    }
                }, 100);
            }
        }
    };

    return (
        <footer className="relative bg-secondary/30 backdrop-blur-lg py-16 text-gray-300 overflow-hidden border-t border-blue-500/20">
            {/* Glowing particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {particles.map((style, i) => <Particle key={i} style={style} />)}
            </div>
            
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Left Logos + About */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center space-x-4 mb-4">
                            {FOOTER_LOGOS.map(logo => (
                                <img 
                                    key={logo.name} 
                                    src={logo.logoUrl} 
                                    alt={logo.name} 
                                    className="h-10 object-contain drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" 
                                    title={logo.name} 
                                />
                            ))}
                        </div>
                        <p className="max-w-md text-gray-400 mb-6">
                            Where coding meets the precision and intensity of Formula 1 racing. 24 hours of high-speed innovation at RVSCET Jamshedpur.
                        </p>
                        <div className="flex space-x-3">
                            {SOCIAL_LINKS.map(link => {
                                const Icon = ICONS[link.name];
                                return (
                                    <a 
                                        key={link.name} 
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="w-10 h-10 flex items-center justify-center rounded-lg border border-blue-400/50 text-blue-300 hover:bg-blue-500/20 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                    >
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Event Info */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4 font-mono drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]">
                            Event Info
                        </h3>
                        <div className="space-y-3">
                            <div>
                                <p className="font-semibold text-blue-300">Date & Time</p>
                                <p className="text-gray-400 text-sm">{FOOTER_EVENT_INFO.date}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-blue-300">Venue</p>
                                <p className="text-gray-400 text-sm">{FOOTER_EVENT_INFO.venue}</p>
                            </div>
                            <div>
                                <p className="font-semibold text-blue-300">Organizer</p>
                                <p className="text-gray-400 text-sm">{FOOTER_EVENT_INFO.organizer}</p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-4">
                        <h3 className="text-xl font-bold text-blue-400 uppercase tracking-wider mb-4 font-mono drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]">
                            Quick Links
                        </h3>
                        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                            {FOOTER_QUICK_LINKS.map(link => (
                                <motion.a 
                                    key={link.title} 
                                    onClick={() => handleLinkClick(link, isHomePage)} 
                                    className="text-gray-400 hover:text-blue-300 transition-colors duration-200 cursor-pointer"
                                    whileHover={{ x: 4, textShadow: "0px 0px 8px rgba(59,130,246,0.8)" }}
                                >
                                    {link.title}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-blue-400/30">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
                        <p className="text-center sm:text-left">
                            © 2025 HackQubit All rights reserved.
                            <br className="sm:hidden" />
                            {FOOTER_LEGAL_LINKS.map((link, index) => (
                                <React.Fragment key={link.title}>
                                    <span className="hidden sm:inline mx-2">|</span>
                                    <motion.a 
                                        onClick={() => handleLinkClick(link, isHomePage)} 
                                        className="hover:text-blue-300 transition-colors mx-2 sm:mx-0 cursor-pointer inline-block"
                                        whileHover={{ y: -2, textShadow: "0px 0px 6px rgba(96,165,250,0.9)" }}
                                    >
                                        {link.title}
                                    </motion.a>
                                </React.Fragment>
                            ))}
                        </p>
                        <p className="mt-4 sm:mt-0 flex items-center text-blue-300 drop-shadow-[0_0_6px_rgba(96,165,250,0.8)]">
                            <span className="text-blue-400 mr-2">•</span>
                            Built with speed & precision
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

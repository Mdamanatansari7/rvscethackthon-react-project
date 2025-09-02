import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { motion, Variants } from 'framer-motion';

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-16 6h16" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const navLinkVariants: Variants = {
    rest: { y: 0, scale: 1, textShadow: '0 0 0px rgb(0, 245, 255)' },
    hover: { y: -4, scale: 1.1, textShadow: '0 0 6px rgb(0, 245, 255)' },
};

const underlineVariants: Variants = {
    rest: { scaleX: 0, originX: 0.5, boxShadow: '0 0 0px rgb(0, 245, 255)' },
    hover: {
        scaleX: 1,
        originX: 0.5,
        boxShadow: '0 0 8px rgb(0, 245, 255)',
        transition: { duration: 0.3, ease: 'easeOut' }
    },
};

const Header: React.FC<{ onNavigateHome: () => void, isHomePage: boolean }> = ({ onNavigateHome, isHomePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (!isHomePage) {
        onNavigateHome();
        return;
    }
    const targetElement = document.getElementById(id);
    if (targetElement) {
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
        });
    }
    if (isMenuOpen) {
        setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-secondary/80 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          {/* Left side Logo */}
         <motion.a 
  onClick={() => onNavigateHome()} 
  className="flex items-center space-x-2 cursor-pointer"
  whileHover={{ scale: 1.05 }}
  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
>
  <img 
    src="/RVS_Logo.webp"   // 👈 apna logo
    alt="/RVS_Logo.webp" 
    className="h-12 w-auto drop-shadow-[0_0_10px_#00f5ff] hover:drop-shadow-[0_0_20px_#00f5ff] transition-all duration-300"
  />
  <span className="text-2xl font-bold tracking-wider text-white">
    Hack<span className="text-accent">Qubit</span>
  </span>
</motion.a>

          
          {isHomePage && (
            <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center space-x-6">
              {NAV_LINKS.map(link => (
                <motion.a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="relative text-gray-300 hover:text-accent transition-colors duration-200 font-medium cursor-pointer py-2"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                    <motion.span
                        className="inline-block"
                        variants={navLinkVariants}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                        {link.title}
                    </motion.span>
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                        variants={underlineVariants}
                    />
                </motion.a>
              ))}
            </nav>
          )}
          
          <div className="flex items-center space-x-6">
            {isHomePage && (
              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                  {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {isHomePage && (
          <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-secondary/95 backdrop-blur-sm`}>
            <nav className="flex flex-col items-center space-y-4 py-6">
              {NAV_LINKS.map(link => (
                <motion.a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className="relative text-gray-200 hover:text-accent transition-colors duration-200 text-lg cursor-pointer py-1"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                    <motion.span
                        className="inline-block"
                        variants={navLinkVariants}
                        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    >
                        {link.title}
                    </motion.span>
                    <motion.div
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                        variants={underlineVariants}
                    />
                </motion.a>
              ))}
            </nav>
          </div>
      )}
    </header>
  );
};

export default Header;



import React from 'react';
// FIX: Import Variants from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

interface PageWrapperProps {
  title: string;
  children: React.ReactNode;
}

const pageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: 'easeIn' } }
};

const PageWrapper: React.FC<PageWrapperProps> = ({ title, children }) => {
  return (
    <motion.div 
      className="pt-20"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
        <section className="relative py-20 sm:py-28 bg-primary/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white">
              {title.split(' ').map((word, index) => 
                index % 2 !== 0 ? <span key={index} className="text-accent">{word} </span> : `${word} `
              )}
            </h2>
            <div className="max-w-4xl mx-auto relative p-6 sm:p-8 bg-secondary/30 backdrop-blur-sm rounded-2xl">
              <div className="absolute -inset-px rounded-2xl border-2 border-accent/20"></div>
              <div className="absolute -inset-1 rounded-2xl border-2 border-accent/30 blur-lg opacity-50"></div>
              <div className="relative z-10 text-gray-300 leading-relaxed space-y-4">
                {children}
              </div>
            </div>
          </div>
        </section>
    </motion.div>
  );
};

export default PageWrapper;
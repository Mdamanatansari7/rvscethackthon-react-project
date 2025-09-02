
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <motion.section 
      id={id} 
      className={`py-20 sm:py-28 scroll-mt-20 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
          {title.split(' ').map((word, index) => 
            index % 2 !== 0 ? <span key={index} className="text-accent">{word} </span> : `${word} `
          )}
        </h2>
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
import React from 'react';
import Section from './Section';
import { PROBLEMS } from '../constants';
import { motion } from 'framer-motion';

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Problems: React.FC = () => {
  return (
    <Section id="problems" title="Problem Statements">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-300">
          Choose a track that excites you the most. You can tackle existing problems or innovate
          within these themes to create something brand new.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {PROBLEMS.map((problem, index) => (
          <motion.div
            key={index}
            className="bg-secondary/50 backdrop-blur-sm p-6 rounded-lg flex items-start space-x-4 
                       border border-red-500/30 hover:border-red-500/70 transition-all duration-300
                       shadow-[0_0_12px_rgba(255,0,0,0.25)] hover:shadow-[0_0_25px_rgba(255,0,0,0.6)]"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300 } }}
          >
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mt-1">
              <CheckIcon />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
              <p className="text-gray-400">{problem.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Problems;

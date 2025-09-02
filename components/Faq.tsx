import React, { useState } from 'react';
import Section from './Section';
import { FAQS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </motion.svg>
);

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-4 rounded-lg hover:bg-secondary/30 transition-colors duration-300"
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <span className="text-red-400">
          <ChevronDownIcon isOpen={isOpen} />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-gray-400 pb-5 px-4">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" title="Frequently Asked Questions">
      <div
        className="max-w-3xl mx-auto relative p-4 sm:p-8 
                   bg-secondary/30 backdrop-blur-sm rounded-2xl
                   border border-red-500/30 
                   shadow-[0_0_12px_rgba(255,0,0,0.25)] 
                   hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] 
                   transition-all duration-300"
      >
        <div className="relative z-10 divide-y divide-gray-700/50">
          {FAQS.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Faq;

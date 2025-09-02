import React from 'react';
import Section from './Section';
import { EVENTS } from '../constants';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

const Events: React.FC = () => {
  return (
    <Section
      id="events"
      title="Mini Events"
      className="bg-secondary/50 backdrop-blur-sm bg-dotted-pattern"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-300">
          Beyond the main competition, we have a series of workshops and fun activities to keep the
          energy high and help you learn new skills.
        </p>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {EVENTS.map((event, index) => (
          <motion.div
            key={index}
            className="bg-primary/50 rounded-lg overflow-hidden 
                       border border-red-500/30 hover:border-red-500/70 
                       transition-all duration-300 
                       shadow-[0_0_12px_rgba(255,0,0,0.25)] hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] 
                       group"
            variants={itemVariants}
            whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${event.title.replace(/\s+/g, '')}/400/300`}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{event.description}</p>
              <span className="text-xs font-mono bg-red-500/10 text-red-400 px-2 py-1 rounded">
                {event.time}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Events;

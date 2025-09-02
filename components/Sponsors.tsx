import React from 'react';
import { SPONSORS } from '../constants';
import { motion } from 'framer-motion';

const Sponsors: React.FC = () => {
  const [host, ...otherSponsors] = SPONSORS;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="sponsors"
      className="relative py-20 sm:py-28 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-secondary via-secondary/70 to-transparent backdrop-blur-sm"></div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
          Partners & <span className="text-red-400">Sponsors</span>
        </h2>

        <div className="max-w-4xl mx-auto text-center">
          {/* Host */}
          {host && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold text-gray-300 mb-6 tracking-wide">
                Organized By
              </h3>
              <div className="flex flex-col justify-center items-center gap-4">
                <motion.a
                  href="https://www.rvscet.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={host.name}
                  className="p-4 bg-secondary/30 rounded-lg 
                             border border-red-500/30 hover:border-red-500/70 
                             shadow-[0_0_12px_rgba(255,0,0,0.25)] hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] 
                             transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img src={host.logoUrl} alt={host.name} className="h-28" />
                </motion.a>
                <motion.div
                  className="text-center cursor-default"
                  whileHover={{ scale: 1.02, filter: 'brightness(1.2)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <h4 className="text-xl md:text-2xl font-bold text-red-400 drop-shadow-[0_0_8px_rgba(255,0,0,0.6)] transition-all duration-300">
                    RVS College of Engineering and Technology
                  </h4>
                  <p className="text-md text-gray-400 mt-1">Jamshedpur, Jharkhand</p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {host && otherSponsors.length > 0 && (
            <div className="w-full max-w-sm mx-auto border-t border-red-500/30 my-12"></div>
          )}

          {/* Other Sponsors */}
          {otherSponsors.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-300 mb-8 tracking-wide">
                Our Sponsors
              </h3>
              <motion.div
                className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {otherSponsors.map((sponsor) => (
                  <motion.div
                    key={sponsor.name}
                    title={sponsor.name}
                    className="p-4 bg-secondary/30 rounded-lg 
                               border border-red-500/30 hover:border-red-500/70 
                               shadow-[0_0_12px_rgba(255,0,0,0.25)] hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] 
                               grayscale hover:grayscale-0 
                               transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <img src={sponsor.logoUrl} alt={sponsor.name} className="h-12" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Sponsors;

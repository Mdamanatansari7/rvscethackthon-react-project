

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { TorusKnot } from '@react-three/drei';
// FIX: Import Variants from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';

interface HeroProps {
  onRegisterClick: () => void;
  onLearnMoreClick: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const AnimatedShape: React.FC = () => {
    const meshRef = useRef<any>(null);
    const [isHovered, setIsHovered] = useState(false);

    useFrame((state, delta) => {
        if(meshRef.current){
            meshRef.current.rotation.x += delta * 0.1;
            meshRef.current.rotation.y += delta * 0.2;

            // Smoothly animate scale on hover
            const targetScale = isHovered ? 1.2 : 1;
            meshRef.current.scale.x += (targetScale - meshRef.current.scale.x) * 0.1;
            meshRef.current.scale.y += (targetScale - meshRef.current.scale.y) * 0.1;
            meshRef.current.scale.z += (targetScale - meshRef.current.scale.z) * 0.1;
        }
    });

    return (
        <TorusKnot 
            ref={meshRef} 
            args={[1, 0.3, 200, 20]} 
            position={[0,0,0]}
            onPointerOver={() => setIsHovered(true)}
            onPointerOut={() => setIsHovered(false)}
        >
            <meshStandardMaterial color="#00f5ff" wireframe={true} />
        </TorusKnot>
    );
};


const Hero: React.FC<HeroProps> = ({ onRegisterClick, onLearnMoreClick }) => {
  return (
    <motion.section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 z-0">
         <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} color="#ff00ff" intensity={1} />
            <pointLight position={[-10, -10, -10]} color="#00f5ff" intensity={1} />
            <Suspense fallback={null}>
                <AnimatedShape />
            </Suspense>
        </Canvas>
      </div>
      <motion.div 
        className="relative z-10 p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight"
          variants={itemVariants}
        >
          Hack <span className="text-accent">Qubit</span>
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Innovate, Collaborate, and Build the Future. Join us for 24 hours of non-stop creation.
        </motion.p>
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
          variants={itemVariants}
        >
            <motion.button 
              onClick={onRegisterClick}
              className="bg-accent hover:bg-highlight text-primary font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform shadow-[0_0_20px_theme(colors.accent)] hover:shadow-[0_0_35px_theme(colors.highlight)]"
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Register Now
            </motion.button>
             <motion.button 
                onClick={onLearnMoreClick}
                className="bg-transparent border-2 border-gray-500 hover:border-accent text-gray-300 hover:text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-[0_0_20px_theme(colors.accent)]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
                Learn More
            </motion.button>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-gray-400 rounded-full"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CursorGlow: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

    const smoothOptions = { stiffness: 300, damping: 20, mass: 0.5 };
    const mouseX = useSpring(mousePosition.x, smoothOptions);
    const mouseY = useSpring(mousePosition.y, smoothOptions);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-96 h-96 rounded-full bg-accent/20 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-1"
            style={{
                x: mouseX,
                y: mouseY,
            }}
        />
    );
};

export default CursorGlow;

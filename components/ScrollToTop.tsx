
import React, { useState, useEffect } from 'react';

const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.18-.65-.87-2.12-1.5-3.05-1.82zM19.5 4.5c1.5-1.26 2-5 2-5s-3.74.5-5 2c-.71.84-.7 2.3-.05 3.18.65.87 2.12 1.5 3.05 1.82z"/>
        <path d="M7 17l-1-1"/><path d="m18 6-1-1"/><path d="m13 21-3-3"/><path d="M12 3l3 3"/><path d="M11 13l3-3"/><path d="M9 21H3v-6"/><path d="M21 3h-6v6"/>
    </svg>
);


const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed bottom-8 right-8 w-14 h-14 rounded-full bg-accent text-primary
                flex items-center justify-center
                shadow-lg shadow-accent/40
                transition-all duration-300 transform
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                hover:bg-highlight hover:scale-110
            `}
        >
            <RocketIcon />
        </button>
    );
};

export default ScrollToTop;

import React from 'react';

const BubblesBackground: React.FC = () => {
    const bubbles = React.useMemo(() => {
        const bubbleData = [];
        for (let i = 0; i < 40; i++) { // Increased count for better effect
            bubbleData.push({
                id: i,
                style: {
                    width: `${2 + Math.random() * 8}vw`,
                    height: `${2 + Math.random() * 8}vw`,
                    left: `${-10 + Math.random() * 120}%`,
                    animationDelay: `${Math.random() * 20}s`,
                    animationDuration: `${15 + Math.random() * 15}s`,
                }
            });
        }
        return bubbleData;
    }, []);

    return (
        <div className="bubbles-background">
            {bubbles.map(bubble => (
                <div key={bubble.id} className="bubble" style={bubble.style as React.CSSProperties}></div>
            ))}
        </div>
    );
};

export default BubblesBackground;
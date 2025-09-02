import React from 'react';
import PageWrapper from './PageWrapper';

const AboutHelixPage: React.FC = () => {
  return (
    <PageWrapper title="About Helix">
        <p className="text-lg">
            Helix, the official Tech & AI Club of RVS College of Engineering and Technology, is a dynamic community of tech enthusiasts, innovators, and problem-solvers. Our mission is to foster a culture of technical excellence and collaborative learning on campus.
        </p>
        <p>
            We organize a variety of events, including workshops on cutting-edge technologies, coding competitions, guest lectures from industry experts, and large-scale events like HackQubit. Our goal is to provide a platform for students to explore their passions in technology, develop practical skills, and connect with like-minded peers and mentors.
        </p>
        <p>
            At Helix, we believe in learning by doing. We encourage our members to build projects, experiment with new ideas, and push the boundaries of what's possible. Whether you're a seasoned coder or just starting your journey in tech, Helix is the place to grow, innovate, and make an impact.
        </p>
    </PageWrapper>
  );
};

export default AboutHelixPage;

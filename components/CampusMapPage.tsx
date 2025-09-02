import React from 'react';
import PageWrapper from './PageWrapper';

const CampusMapPage: React.FC = () => {
  return (
    <PageWrapper title="Campus Map">
      <p className="text-center mb-6">
        Navigate your way through the RVS College of Engineering and Technology campus. The main hackathon events will be held at the main auditorium.
      </p>
      <div className="relative w-full aspect-video p-1">
          <div className="absolute -inset-px rounded-2xl border-2 border-accent/50"></div>
          <div className="absolute -inset-1 rounded-2xl border-2 border-accent/80 blur-lg opacity-70"></div>
          <iframe
              className="relative w-full h-full rounded-xl border-2 border-accent/20 filter grayscale(1) invert(0.9) contrast(0.8)"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.895162137912!2d86.24893451543883!3d22.76913498508129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e3f3b1a7397b%3A0x8e831558856c9a1!2sRVS%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RVS College of Engineering and Technology Location"
          ></iframe>
      </div>
    </PageWrapper>
  );
};

export default CampusMapPage;

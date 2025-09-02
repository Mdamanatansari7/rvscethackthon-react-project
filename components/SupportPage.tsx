import React from 'react';
import PageWrapper from './PageWrapper';

const SupportPage: React.FC = () => {
  return (
    <PageWrapper title="Support Center">
      <p className="text-lg text-center mb-6">
        We're here to help you have the best possible experience at HackQubit. Whether you have a technical question, need a mentor, or have a general query, here’s how to get support.
      </p>

      <div>
        <h3 className="text-2xl font-bold text-accent mb-3">On-Site Help Desk</h3>
        <p>
          During the event, we will have a dedicated Help Desk located near the main entrance of the auditorium. Our volunteers will be available 24/7 to assist you with:
        </p>
        <ul className="list-disc list-inside space-y-2 my-4 pl-4">
          <li>General information about the schedule and venue.</li>
          <li>Technical assistance and troubleshooting.</li>
          <li>Connecting with mentors.</li>
          <li>Reporting any issues or concerns.</li>
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-2xl font-bold text-accent mb-3">Online Support (Discord)</h3>
        <p>
          Our official communication channel for the hackathon is Discord. Please join our server for real-time announcements, mentor Q&A sessions, and to connect with other participants.
        </p>
        <div className="text-center my-4">
            <a href="#" className="bg-accent hover:bg-highlight text-primary font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_theme(colors.accent)]">
              Join our Discord Server
            </a>
        </div>
        <p>
            Specific channels like <strong>#tech-support</strong> and <strong>#find-a-mentor</strong> will be available for you to post your questions.
        </p>
      </div>

       <div className="mt-6">
        <h3 className="text-2xl font-bold text-accent mb-3">Emergency Contact</h3>
        <p>
          In case of a medical or security emergency, please contact the on-site volunteers at the Help Desk immediately or call our emergency support line: <strong>+91 999 888 7777</strong>.
        </p>
      </div>
    </PageWrapper>
  );
};

export default SupportPage;

import React from 'react';
import PageWrapper from './PageWrapper';

const CodeOfConductPage: React.FC = () => {
  return (
    <PageWrapper title="Code of Conduct">
      <div>
        <h3 className="text-2xl font-bold text-accent mb-3">Our Pledge</h3>
        <p className="mb-4">
          In the interest of fostering an open and welcoming environment, we as organizers, sponsors, mentors, and participants pledge to making participation in our hackathon a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-accent mb-3 mt-6">Expected Behavior</h3>
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>Be respectful of differing viewpoints and experiences.</li>
          <li>Use welcoming and inclusive language.</li>
          <li>Give and gracefully accept constructive criticism.</li>
          <li>Show empathy towards other community members.</li>
          <li>Collaborate effectively and professionally.</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-accent mb-3 mt-6">Unacceptable Behavior</h3>
        <p>The following behaviors are considered harassment and are unacceptable within our community:</p>
         <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
            <li>The use of sexualized language or imagery, and unwelcome sexual attention or advances.</li>
            <li>Trolling, insulting/derogatory comments, and personal or political attacks.</li>
            <li>Public or private harassment of any kind.</li>
            <li>Publishing others' private information, such as a physical or electronic address, without explicit permission.</li>
            <li>Other conduct which could reasonably be considered inappropriate in a professional setting.</li>
        </ul>
      </div>
       <div>
        <h3 className="text-2xl font-bold text-accent mb-3 mt-6">Consequences of Unacceptable Behavior</h3>
        <p>
            Unacceptable behavior from any community member, including sponsors and those with decision-making authority, will not be tolerated. Anyone asked to stop unacceptable behavior is expected to comply immediately. If a participant engages in harassing behavior, the organizers may take any action they deem appropriate, up to and including expulsion from the hackathon with no refund.
        </p>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-accent mb-3 mt-6">Reporting</h3>
        <p>
            If you are subject to or witness any violations of this Code of Conduct, please report it immediately by contacting a member of the organizing team on-site or reaching out to our support team via the contact information provided on the support page. All reports will be handled with discretion and investigated promptly.
        </p>
      </div>
    </PageWrapper>
  );
};

export default CodeOfConductPage;

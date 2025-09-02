import React from 'react';
import PageWrapper from './PageWrapper';

const GuidelinesPage: React.FC = () => {
  return (
    <PageWrapper title="Guidelines & Rules">
        <div>
            <h3 className="text-2xl font-bold text-accent mb-3">Code of Conduct</h3>
            <p className="mb-4">
                Our hackathon is dedicated to providing a safe, inclusive, and welcoming experience for everyone. All participants, sponsors, mentors, and organizers are required to agree with the following code of conduct. We expect cooperation from all participants to help ensure a safe environment for everybody. Harassment of any kind will not be tolerated.
            </p>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-accent mb-3 mt-6">Team Formation</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Teams can consist of 1 to 4 members.</li>
                <li>All participants must be current university students.</li>
                <li>You can form teams before the event or during the dedicated team formation session at the start of the hackathon.</li>
            </ul>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-accent mb-3 mt-6">Project Submission</h3>
             <ul className="list-disc list-inside space-y-2 pl-4">
                <li>All projects must be started and completed within the 24-hour hackathon period. Using pre-existing projects is not allowed.</li>
                <li>You may use open-source libraries, frameworks, and APIs.</li>
                <li>Submissions must include a link to a public code repository (e.g., GitHub).</li>
                <li>A short video demonstration of your project is required along with the submission.</li>
            </ul>
        </div>
         <div>
            <h3 className="text-2xl font-bold text-accent mb-3 mt-6">Judging Criteria</h3>
             <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong>Innovation & Creativity:</strong> How original and unique is the idea?</li>
                <li><strong>Technical Complexity:</strong> How challenging was the project to build?</li>
                <li><strong>Design & User Experience:</strong> Is the project easy to use and well-designed?</li>
                <li><strong>Impact & Feasibility:</strong> How well does the solution solve the problem it addresses?</li>
                <li><strong>Presentation:</strong> How effectively did the team present their project?</li>
            </ul>
        </div>
    </PageWrapper>
  );
};

export default GuidelinesPage;

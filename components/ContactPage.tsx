import React from 'react';
import PageWrapper from './PageWrapper';

const MailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;

const ContactPage: React.FC = () => {
  return (
    <PageWrapper title="Contact Us">
      <p className="text-center text-lg mb-8">
        Have questions or need to get in touch? Here’s how you can reach us. We're excited to hear from you!
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 text-center">
        <div className="bg-primary/50 p-6 rounded-lg border border-gray-700/50">
          <h3 className="text-xl font-bold text-accent mb-3">General Inquiries</h3>
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <MailIcon />
            <a href="mailto:contact@hackqubit.com" className="hover:underline">contact@hackqubit.com</a>
          </div>
        </div>
        <div className="bg-primary/50 p-6 rounded-lg border border-gray-700/50">
          <h3 className="text-xl font-bold text-accent mb-3">Sponsorship Details</h3>
          <div className="flex items-center justify-center space-x-2 text-gray-300">
            <MailIcon />
            <a href="mailto:sponsors@hackqubit.com" className="hover:underline">sponsors@hackqubit.com</a>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-700/50">
        <h3 className="text-2xl font-bold text-white text-center mb-6">Event Coordinators</h3>
        <div className="grid sm:grid-cols-2 gap-6 text-center">
          <div>
            <p className="font-bold text-lg">Coordinator Name 1</p>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
                <PhoneIcon />
                <span>+91 12345 67890</span>
            </div>
          </div>
          <div>
            <p className="font-bold text-lg">Coordinator Name 2</p>
            <div className="flex items-center justify-center space-x-2 text-gray-400">
                <PhoneIcon />
                <span>+91 09876 54321</span>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ContactPage;

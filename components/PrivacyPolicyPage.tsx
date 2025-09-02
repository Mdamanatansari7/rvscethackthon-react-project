import React from 'react';
import PageWrapper from './PageWrapper';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <PageWrapper title="Privacy Policy">
      <p className="text-lg">
        Your privacy is important to us. It is HackQubit's policy to respect your privacy regarding any information we may collect from you across our website.
      </p>

      <div>
        <h3 className="text-2xl font-bold text-accent mb-3 mt-6">1. Information We Collect</h3>
        <p>
          We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. This includes information you provide during registration, such as your name, email address, college name, and team details.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-accent mb-3 mt-6">2. How We Use Your Information</h3>
        <p>
          We use the information we collect to organize and manage the hackathon, communicate with participants, and announce winners. We may also use your information to send you updates about future events, but only with your explicit consent.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-accent mb-3 mt-6">3. Information Sharing</h3>
        <p>
          We do not share any personally identifying information publicly or with third-parties, except when required to by law. We may share your information with our event sponsors for recruitment purposes, but we will seek your consent before doing so.
        </p>
      </div>
      
       <div>
        <h3 className="text-2xl font-bold text-accent mb-3 mt-6">4. Data Security</h3>
        <p>
            We take reasonable precautions to protect your information. We store collected data within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-accent mb-3 mt-6">5. Your Rights</h3>
        <p>
            You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services. Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information.
        </p>
      </div>

      <p className="mt-6">
        If you have any questions about how we handle user data and personal information, feel free to <a href="mailto:contact@hackqubit.com" className="text-accent hover:underline">contact us</a>. This policy is effective as of 1st January 2025.
      </p>
    </PageWrapper>
  );
};

export default PrivacyPolicyPage;

import React from 'react';
import PageWrapper from './PageWrapper';

const TermsOfServicePage: React.FC = () => {
  return (
    <PageWrapper title="Terms of Service">
      <p className="text-lg">
        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the HackQubit website (the "Service") operated by the Helix club of RVSCET ("us", "we", or "our").
      </p>

      <div>
        <h3 className="text-2xl font-bold text-accent mb-3 mt-6">1. Acceptance of Terms</h3>
        <p>
          By accessing and using our Service, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this Service's particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-accent mb-3 mt-6">2. User Conduct</h3>
        <p>
          As a condition of use, you promise not to use the Service for any purpose that is unlawful or prohibited by these Terms, or any other purpose not reasonably intended by HackQubit. You agree to abide by all applicable local, state, national, and international laws and regulations.
        </p>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-accent mb-3 mt-6">3. Intellectual Property</h3>
        <p>
          The Service and its original content, features, and functionality are and will remain the exclusive property of HackQubit and its licensors. Teams will retain full ownership of the intellectual property of the projects they create during the hackathon. By submitting a project, you grant HackQubit a non-exclusive, royalty-free license to feature the project for promotional purposes.
        </p>
      </div>
      
       <div>
        <h3 className="text-2xl font-bold text-accent mb-3 mt-6">4. Disclaimer of Warranties</h3>
        <p>
            The Service is provided on an "as is" and "as available" basis. Use of the Service is at your own risk. To the maximum extent permitted by applicable law, the Service is provided without warranties of any kind, whether express or implied.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-accent mb-3 mt-6">5. Limitation of Liability</h3>
        <p>
            In no event shall HackQubit, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
        </p>
      </div>
       <div>
        <h3 className="text-2xl font-bold text-accent mb-3 mt-6">6. Changes to Terms</h3>
        <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
      </div>
    </PageWrapper>
  );
};

export default TermsOfServicePage;

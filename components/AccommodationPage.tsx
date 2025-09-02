import React from 'react';
import PageWrapper from './PageWrapper';

const AccommodationPage: React.FC = () => {
  return (
    <PageWrapper title="Accommodation">
      <h3 className="text-2xl font-bold text-accent mb-4">For Out-of-Station Participants</h3>
      <p>
        We are excited to welcome participants from all over the country! To ensure a comfortable and hassle-free experience, we are providing accommodation facilities for participants traveling from outside Jamshedpur.
      </p>
      <ul className="list-disc list-inside space-y-2 my-4 pl-4">
          <li><strong>Location:</strong> Accommodation will be provided within the college hostels.</li>
          <li><strong>Availability:</strong> Rooms will be available from the morning of October 7th to the evening of October 8th.</li>
          <li><strong>Cost:</strong> There is a nominal fee for accommodation to cover basic amenities. Please check the registration details for more information.</li>
          <li><strong>Amenities:</strong> Participants will be provided with a mattress, bedding, and access to washroom facilities.</li>
          <li><strong>Registration:</strong> You can opt for accommodation while filling out the main registration form. Slots are limited and will be allocated on a first-come, first-served basis.</li>
      </ul>
      <p>
        Please bring your own toiletries and any other personal items you may require. We recommend carrying a valid government-issued ID card and your college ID card for verification. For any specific queries regarding accommodation, please reach out to our support team.
      </p>
    </PageWrapper>
  );
};

export default AccommodationPage;

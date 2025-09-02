export const NAV_LINKS = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'venue', title: 'Venue' },
  { id: 'prizes', title: 'Prizes' },
  { id: 'schedule', title: 'Schedule' },
  { id: 'problems', title: 'Problems' },
  { id: 'events', title: 'Events' },
  { id: 'faq', title: 'FAQ' },
  { id: 'sponsors', title: 'Sponsors' },
];

export const PRIZES = [
    { title: 'Champion', amount: '₹15,000', description: '+ Exclusive Merchandise & Recognition', color: 'yellow', rank: 1 },
    { title: 'Runner-Up', amount: '₹10,000', description: '+ Exclusive Merchandise & Recognition', color: 'gray', rank: 2 },
    { title: 'Third Place', amount: '₹5,000', description: '+ Exclusive Merchandise & Recognition', color: 'orange', rank: 3 },
];

export const SCHEDULE_ITEMS = [
    { day: 'Day 1 - October 7', time: '09:00 AM', title: 'Registration & Check-in', description: 'Team registration, badge collection, and welcome kit distribution.', color: 'red', icon: 'RegistrationIcon' },
    { day: 'Day 1 - October 7', time: '10:00 AM', title: 'Opening Ceremony', description: 'Welcome address, problem statement reveal, and hackathon kickoff.', color: 'blue', icon: 'OpeningCeremonyIcon' },
    { day: 'Day 1 - October 7', time: '11:00 AM', title: 'Hacking Begins', description: '24-hour coding marathon starts. Teams begin building their solutions.', color: 'green', icon: 'HackingBeginsIcon' },
    { day: 'Day 1 - October 7', time: '01:00 PM', title: 'Lunch Break', description: 'Fuel up for the long coding session ahead.', color: 'gray', icon: 'LunchBreakIcon' },
    { day: 'Day 1 - October 7', time: '03:00 PM', title: 'Tech Talks & Mentoring', description: 'Industry expert sessions and mentor consultation.', color: 'red', icon: 'TechTalksIcon' },
    { day: 'Day 1 - October 7', time: '08:00 PM', title: 'Dinner & Networking', description: 'Evening meal and networking with fellow hackers.', color: 'blue', icon: 'DinnerIcon' },
    { day: 'Night Session', time: '12:00 AM', title: 'Midnight Energy Boost', description: 'Coffee, snacks, and motivation to keep coding through the night.', color: 'yellow', icon: 'EnergyBoostIcon' },
    { day: 'Day 2 - October 8', time: '08:00 AM', title: 'Breakfast & Final Sprint', description: 'Morning fuel for the final push towards submission.', color: 'gray', icon: 'BreakfastIcon' },
    { day: 'Day 2 - October 8', time: '10:00 AM', title: 'Submission Deadline', description: 'Final submissions and project demonstrations begin.', color: 'red', icon: 'SubmissionIcon' },
    { day: 'Day 2 - October 8', time: '10:30 AM', title: 'Judging & Presentations', description: 'Team presentations and evaluation by expert judges.', color: 'blue', icon: 'JudgingIcon' },
    { day: 'Day 2 - October 8', time: '12:30 PM', title: 'Closing Ceremony', description: 'Results announcement, prize distribution, and celebration.', color: 'green', icon: 'ClosingCeremonyIcon' },
];

export const PROBLEMS = [
    { title: 'Fintech Revolution', description: 'Develop innovative solutions for personal finance, banking, or blockchain technology.' },
    { title: 'Sustainable Future', description: 'Create technology that addresses environmental challenges like waste management or renewable energy.' },
    { title: 'Healthcare Innovation', description: 'Build tools to improve patient care, medical data analysis, or accessibility in healthcare.' },
    { title: 'Open Innovation', description: 'Have a groundbreaking idea that doesn\'t fit a category? This track is for you.' },
];

export const EVENTS = [
    { title: 'Intro to React 3D', description: 'Learn the basics of creating 3D web experiences with React Three Fiber.', time: 'Day 1 - 3 PM' },
    { title: 'Pitching Your Hack', description: 'A session on how to effectively present your project to the judges.', time: 'Day 2 - 9 AM' },
    { title: 'Gaming Tournament', description: 'Take a break and compete in a friendly gaming competition.', time: 'Day 1 - 10 PM' },
];

export const FAQS = [
    { question: 'Who can participate?', answer: 'The hackathon is open to all university students, regardless of their major. If you have a passion for creating, you are welcome.' },
    { question: 'Is there a registration fee?', answer: 'No, participation is completely free for all selected participants. We\'ll provide food, drinks, and a place to code.' },
    { question: 'What is the team size?', answer: 'You can participate individually or in teams of up to 4 members.' },
    { question: 'Do I need to have a team beforehand?', answer: 'Not at all! We will have dedicated team formation sessions at the beginning of the event for those who are looking for a team.' },
    { question: 'What should I bring?', answer: 'You should bring your own laptop, chargers, any necessary hardware for your project, and your enthusiasm!' },
];

export const SPONSORS = [
    { name: 'RVS College of Engineering & Technology', logoUrl: '/RVS_Logo.webp', websiteUrl: 'https://www.rvscet.ac.in/' },
    { name: 'InnovateX', logoUrl: '/soon.png' },
    { name: 'QuantumLeap', logoUrl: '/soon.png' },
    { name: 'FutureForge', logoUrl: '/soon.png' },
    { name: 'CodeCrafters', logoUrl: '/soon.png' },
    { name: 'TechTonic', logoUrl: '/soon.png' },
];

export const FOOTER_LOGOS = [
   
    { name: 'RVS College of Engineering & Technology', logoUrl: '/RVSCET-Website.png' },
];

export const SOCIAL_LINKS = [
    { name: 'discord', url: '#' },
    { name: 'mail', url: 'mailto:contact@hackqubit.com' },
    { name: 'instagram', url: '#' },
    { name: 'linkedin', url: '#' },
];

export const FOOTER_EVENT_INFO = {
    date: 'October 7-8, 2025 - 24 Hours',
    venue: 'RVSCET Jamshedpur, Jharkhand',
    organizer: 'Helix - Tech & AI Club of RVSCET'
};

export const FOOTER_QUICK_LINKS: { title: string; id: string; isPage: boolean }[] = [
    { title: 'Registration', id: 'register', isPage: false },
    { title: 'Guidelines', id: 'guidelines', isPage: true },
    { title: 'Schedule', id: 'schedule', isPage: false },
    { title: 'Contact', id: 'contact', isPage: true },
    { title: 'About Helix', id: 'about-helix', isPage: true },
    { title: 'Campus Map', id: 'campus-map', isPage: true },
    { title: 'Accommodation', id: 'accommodation', isPage: true },
    { title: 'Support', id: 'support', isPage: true },
];


export const FOOTER_LEGAL_LINKS: { title: string; id: string; isPage: boolean }[] = [
    { title: 'Privacy Policy', id: 'privacy-policy', isPage: true },
    { title: 'Terms of Service', id: 'terms-of-service', isPage: true },
    { title: 'Code of Conduct', id: 'code-of-conduct', isPage: true },
];
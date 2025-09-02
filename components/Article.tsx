import React from 'react';
import { motion } from 'framer-motion';

// Icons
const BrandVisibilityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const AccessTalentIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/><path d="M12 12h.01"/></svg>;
const CommunityEngagementIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>;
const NetworkingIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>;
const RocketIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.18-.65-.87-2.12-1.5-3.05-1.82zM19.5 4.5c1.5-1.26 2-5 2-5s-3.74.5-5 2c-.71.84-.7 2.3-.05 3.18.65.87 2.12 1.5 3.05 1.82z"/><path d="m7 17-1-1"/><path d="m18 6-1-1"/><path d="m13 21-3-3"/><path d="M12 3l3 3"/><path d="M11 13l3-3"/><path d="M9 21H3v-6"/><path d="M21 3h-6v6"/></svg>;

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

// Animated Title Component
const AnimatedTitle: React.FC<{ text: string; highlight?: string; className?: string; }> = ({ text, highlight, className = '' }) => {
    const words = text.split(' ');
    return (
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-10 text-[#D40000] uppercase tracking-wider ${className}`}>
            {words.map((word, i) => (
                <motion.span 
                    key={i} 
                    className="inline-block" 
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                >
                    {word === highlight ? <span className="text-gray-800">{word}</span> : word}
                    {' '}
                </motion.span>
            ))}
        </h2>
    );
};

// Brochure Card Component
const BrochureCard: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
    <div className={`relative border-2 border-red-200 rounded-xl p-6 sm:p-8 bg-white shadow-xl ${className}`}>
        {/* Decorative elements */}
        <div className="absolute -top-1.5 -left-1.5 w-10 h-10 border-t-4 border-l-4 border-red-500 rounded-tl-lg"></div>
        <div className="absolute -bottom-1.5 -right-1.5 w-10 h-10 border-b-4 border-r-4 border-red-500 rounded-br-lg"></div>
        <div className="absolute top-5 -right-4 space-y-1.5">
            {[...Array(4)].map((_, i) => <div key={i} className="w-8 h-[3px] bg-red-400"></div>)}
        </div>
         <div className="absolute bottom-5 -left-4 space-y-1.5">
            {[...Array(4)].map((_, i) => <div key={i} className="w-8 h-[3px] bg-red-400"></div>)}
        </div>
        {children}
    </div>
);

// Sponsor Benefit Item Component
const SponsorBenefit: React.FC<{icon: React.ReactNode; title: string; points: string[];}> = ({ icon, title, points }) => (
    <div className="flex items-start space-x-4 mb-6">
        <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-red-600 p-2">
            {icon}
        </div>
        <div>
            <h4 className="text-xl font-bold text-gray-900 mb-2 uppercase">{title}</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
                {points.map((point, i) => <li key={i}>{point}</li>)}
            </ul>
        </div>
    </div>
);

const Article: React.FC<{ onBackClick: () => void }> = ({ onBackClick }) => {
    return (
        <motion.div 
            className="bg-gray-50 text-gray-800 font-sans p-4 sm:p-8 md:p-12"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <div className="max-w-4xl mx-auto">
                <button 
                    onClick={onBackClick}
                    className="mb-8 bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition-colors duration-300 flex items-center space-x-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                    <span>Back to Home</span>
                </button>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                    <div className="flex flex-col">
                        <AnimatedTitle text="ABOUT RVSCE" />
                        <BrochureCard className="flex-grow">
                             <p className="text-gray-700 leading-relaxed">
                                <strong>RVS College of Engineering and Technology</strong>, located in Jamshedpur, Jharkhand, was established in <strong>2004</strong> with the primary goal of providing <strong>high-quality education</strong> in technology to contribute to society. Our 30-acre campus offers a serene and stimulating environment for our students to thrive. We are recognized by <strong>AICTE and JUT</strong>, ensuring that we adhere to the highest standards of education. Our experienced faculty is committed to offering a comprehensive curriculum focused on hands-on training to develop practical understanding.
                                <br/><br/>
                                Our infrastructure includes <strong>state-of-the-art laboratories</strong>, helping us achieve excellence in technical education. We encourage our students to participate in <strong>extracurricular activities</strong>, preparing them for success in their professional and personal lives.
                            </p>
                        </BrochureCard>
                        <img src="https://i.postimg.cc/8P0hVd9c/rvscet-building.jpg" alt="RVS College Building" className="rounded-lg shadow-xl mt-8 w-full object-cover h-64"/>
                    </div>
                    <div className="flex flex-col">
                        <AnimatedTitle text="ABOUT HACK QUBIT" />
                         <BrochureCard className="flex-grow">
                             <p className="text-gray-700 leading-relaxed">
                                <strong>Hack Qubit 2025</strong> is a <strong>24-hour national-level hackathon</strong> hosted by <strong>RVSCET, Jamshedpur</strong>, in collaboration with <strong>Google Developer Group (GDG) Ranchi</strong>. Scheduled for October 7th and 8th, designed to bring together the brightest minds in technology, innovation, and creativity.
                                <br/><br/>
                                Fueled by the thrill of an F1 race, this competition challenges participants to <strong>Code, Create, and Conquer</strong> as they race against time to <strong>develop groundbreaking solutions</strong>.
                                <br/><br/>
                                This year, the event welcomes students from across <strong>India</strong> — regardless of background or branch — to compete in diverse domains. <strong>No pre-submissions, no PPTs — just pure innovation.</strong>
                            </p>
                        </BrochureCard>
                        <div className="flex justify-center mt-8">
                            <img src="https://i.postimg.cc/prpyQc69/hackathon-mascot.png" alt="Hack Qubit Mascot" className="h-64 object-contain"/>
                        </div>
                    </div>
                </div>

                <div className="mt-20">
                    <AnimatedTitle text="WHY SPONSOR US?"/>
                    <SponsorBenefit 
                        icon={<BrandVisibilityIcon />} 
                        title="Brand Visibility" 
                        points={["Logo placement on event banners, posters, digital media, and certificates.", "Recognition in all social media campaigns and official communications.", "Featured on the HackQubit website & registration portal."]}
                    />
                    <SponsorBenefit 
                        icon={<AccessTalentIcon />} 
                        title="Access To Top Talent" 
                        points={["Direct interaction with highly skilled students, coders, and innovators.", "Opportunity to spot potential hires or interns.", "Build relationships with future tech leaders."]}
                    />
                     <SponsorBenefit 
                        icon={<CommunityEngagementIcon />} 
                        title="Community Engagement & CSR" 
                        points={["Contribute to skill development and innovation in the student community.", "Support a first-of-its-kind initiative in the college.", "Showcase your brand as a leader in tech and education."]}
                    />
                     <SponsorBenefit 
                        icon={<NetworkingIcon />} 
                        title="Networking & Exposure" 
                        points={["Invite your representatives as judges or mentors.", "Interact with other industry experts and partners.", "Feature in post-event highlights, media coverage, and recap videos."]}
                    />
                </div>

                <div className="mt-20">
                    <AnimatedTitle text="MARKETING & REACH" />
                    <BrochureCard>
                        <div className="grid md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-red-200">
                           <div className="pr-4 space-y-4 pt-8 md:pt-0">
                               <h3 className="font-bold text-center text-lg uppercase mb-4">Audience Profile:</h3>
                               <p><strong>300+</strong> Student developers from engineering colleges.</p>
                               <p>Mentors & professionals from the tech industry.</p>
                               <p>Startup founders, tech leaders, and community members.</p>
                               <p>Faculty & educators supporting innovation.</p>
                           </div>
                           <div className="pl-4 space-y-4 pt-8 md:pt-0">
                               <h3 className="font-bold text-center text-lg uppercase mb-4">Promotional Channels:</h3>
                               <p><strong>On-Campus Promotions:</strong> Banners, posters, and merchandise.</p>
                               <p><strong>Digital Media:</strong> Instagram, LinkedIn, Twitter (X), and WhatsApp campaigns.</p>
                               <p><strong>Developer Communities:</strong> GDG Ranchi, Devfolio, etc.</p>
                               <p><strong>Press & Blogs:</strong> College news outlets and tech blogs.</p>
                           </div>
                        </div>
                        <div className="border-t border-red-200 mt-8 pt-8 text-center">
                            <h3 className="font-bold text-xl uppercase mb-6">Projected Reach</h3>
                            <div className="flex flex-col sm:flex-row justify-around items-center">
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-red-600">5000+</p>
                                    <p className="text-gray-700">Digital Impressions</p>
                                </div>
                                <div className="text-center my-6 sm:my-0">
                                    <p className="text-4xl font-bold text-red-600">1500+</p>
                                    <p className="text-gray-700">Active Social Engagements</p>
                                </div>
                                 <div className="text-center">
                                    <p className="text-4xl font-bold text-red-600">500+</p>
                                    <p className="text-gray-700">On-site Participants & Attendees</p>
                                </div>
                                <div className="text-red-500/80 mt-6 sm:mt-0">
                                    <RocketIcon />
                                </div>
                            </div>
                        </div>
                    </BrochureCard>
                </div>

                 <div className="mt-20 text-center">
                    <AnimatedTitle text="CALL TO ACTION" />
                    <p className="text-lg mb-6">HackQubit 2K25 is more than a hackathon - it's a platform where ideas turn into solutions, students become innovators, and sponsors create meaningful impact.</p>
                    <BrochureCard>
                        <h3 className="text-2xl font-bold mb-4">Take Action Today</h3>
                        <ul className="list-disc list-inside text-left mx-auto max-w-md space-y-2">
                           <li className="text-red-600"><span className="text-gray-700"><strong>Partner With Us:</strong> Empower the next generation of developers.</span></li>
                           <li className="text-red-600"><span className="text-gray-700"><strong>Showcase Your Brand:</strong> Gain visibility among students, educators, and industry leaders.</span></li>
                           <li className="text-red-600"><span className="text-gray-700"><strong>Engage With Talent:</strong> Identify future innovators, potential interns, and recruits.</span></li>
                        </ul>
                    </BrochureCard>
                </div>

            </div>
        </motion.div>
    );
};

export default Article;
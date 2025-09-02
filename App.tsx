

import React from 'react';
import { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { AnimatePresence, motion } from 'framer-motion';
import useSmoothScroll from './hooks/useSmoothScroll';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Venue from './components/Venue';
import Prizes from './components/Prizes';
import Schedule from './components/Schedule';
import Problems from './components/Problems';
import Events from './components/Events';
import Faq from './components/Faq';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import ScrollToTop from './components/ScrollToTop';
import Article from './components/Article';
import ContactPage from './components/ContactPage';
import SupportPage from './components/SupportPage';
import AccommodationPage from './components/AccommodationPage';
import AboutHelixPage from './components/AboutHelixPage';
import GuidelinesPage from './components/GuidelinesPage';
import CampusMapPage from './components/CampusMapPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import CodeOfConductPage from './components/CodeOfConductPage';
import CursorGlow from './components/CursorGlow';
import BubblesBackground from './components/BubblesBackground';


export type Page = 'home' | 'article' | 'contact' | 'support' | 'accommodation' | 'about-helix' | 'guidelines' | 'campus-map' | 'privacy-policy' | 'terms-of-service' | 'code-of-conduct';

const App: React.FC = () => {
  useSmoothScroll();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const htmlElement = document.documentElement;
    // When the modal is open, we want to prevent the background from scrolling.
    if (isModalOpen) {
      // This prevents background scroll while allowing the modal itself to scroll.
      htmlElement.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when the modal is closed.
      htmlElement.style.overflow = '';
    }
    
    // Cleanup function to ensure scroll is re-enabled on component unmount
    return () => {
        htmlElement.style.overflow = '';
    };
  }, [isModalOpen]);


  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <motion.div key="home">
            <Hero onRegisterClick={openModal} onLearnMoreClick={() => navigateTo('article')} />
            <About />
            <Venue />
            <Prizes />
            <Schedule />
            <Problems />
            <Events />
            <Faq />
            <Sponsors />
          </motion.div>
        );
      case 'article':
        return <Article key="article" onBackClick={() => navigateTo('home')} />;
      case 'contact':
        return <ContactPage key="contact" />;
      case 'support':
        return <SupportPage key="support" />;
      case 'accommodation':
        return <AccommodationPage key="accommodation" />;
      case 'about-helix':
        return <AboutHelixPage key="about-helix" />;
      case 'guidelines':
        return <GuidelinesPage key="guidelines" />;
      case 'campus-map':
        return <CampusMapPage key="campus-map" />;
      case 'privacy-policy':
        return <PrivacyPolicyPage key="privacy-policy" />;
      case 'terms-of-service':
        return <TermsOfServicePage key="terms-of-service" />;
      case 'code-of-conduct':
        return <CodeOfConductPage key="code-of-conduct" />;
      default:
        return (
           <motion.div key="default-home">
            <Hero onRegisterClick={openModal} onLearnMoreClick={() => navigateTo('article')} />
            <About />
            <Venue />
            <Prizes />
            <Schedule />
            <Problems />
            <Events />
            <Faq />
            <Sponsors />
          </motion.div>
        );
    }
  };

  return (
    <div className="relative overflow-x-hidden">
      <CursorGlow />
      <BubblesBackground />
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
          <Canvas camera={{ position: [0, 0, 1] }}>
              <Suspense fallback={null}>
                  <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
              </Suspense>
          </Canvas>
      </div>
      
      <Header onNavigateHome={() => navigateTo('home')} isHomePage={currentPage === 'home'} />
      <main>
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      <ScrollToTop />
      <Footer onNavigate={navigateTo} onRegisterClick={openModal} />
      
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
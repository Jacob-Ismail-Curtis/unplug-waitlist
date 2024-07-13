/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen'; // Import the LoadingScreen component
import logo from './assets/unplug-logo.png';
import instagram from './assets/instagram.png';
import tiktok from './assets/tiktok.png';
import instagramOrange from './assets/instagram_orange.png';
import tiktokOrange from './assets/tiktok_orange.png';
import Modal from './components/Modal';
import './index.css'; // Import the CSS file

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Hide the loading screen after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Define colors for the radial gradient animation
  const colors = ['#FF9700', '#FF2E00', '#FFC700'];

  // Framer Motion animation variants for the background gradient
  const backgroundVariants = {
    initial: {
      background: `radial-gradient(circle, ${colors[2]}, ${colors[0]})`,
    },
    animate: {
      background: `radial-gradient(circle, ${colors[1]}, ${colors[2]})`,
      transition: {
        ease: 'easeInOut',
        duration: 10,
        repeat: Infinity, // Infinite animation loop
        repeatType: 'mirror',
      },
    },
  };

  // Animation for social icons on hover
  const socialIconVariants = {
    hover: {
      scale: 1.2,
    },
  };

  // Animation for text fade-in
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <motion.div
      className="relative min-h-screen flex flex-col items-center text-white"
      variants={backgroundVariants}
      initial="initial"
      animate="animate"
    >
      <header className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-10">
        <img src={logo} alt="Unplug Logo" className="h-16 md:h-24 lg:h-32" />
        <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
          <motion.a
            href="https://www.instagram.com/unplug.uk/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <img
              src={instagram}
              alt="Instagram"
              className="h-8 md:h-12 lg:h-16 group-hover:hidden"
            />
            <img
              src={instagramOrange}
              alt="Instagram Orange"
              className="h-8 md:h-12 lg:h-16 hidden group-hover:block"
            />
          </motion.a>
          <motion.a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            variants={socialIconVariants}
            whileHover="hover"
          >
            <img
              src={tiktok}
              alt="TikTok"
              className="h-8 md:h-12 lg:h-16 group-hover:hidden"
            />
            <img
              src={tiktokOrange}
              alt="TikTok Orange"
              className="h-8 md:h-12 lg:h-16 hidden group-hover:block"
            />
          </motion.a>
        </div>
      </header>
      <main className="flex-grow flex flex-col lg:flex-row items-center justify-center text-center lg:text-left lg:px-20 py-6 md:py-10">
        <div className="flex flex-col lg:flex-row lg:w-full lg:p-4">
          <motion.div
            className="lg:w-full lg:pr-24 md:pr-10 pt-4 px-4"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">the unplug club.</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">lets you disconnect to reconnect</h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-[#FFD9A1]">
              join the waitlist
              <br />
              be the first to hear about events
            </p>
            <WaitlistForm />
          </motion.div>
          <div className="lg:w-full mt-4 lg:mt-0 flex justify-center items-center">
            <iframe
              width="280"
              height="500"
              src="https://www.youtube.com/embed/qqZ-4woTkuA" // Replace with your YouTube Shorts video ID
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg overflow-hidden"
            />
          </div>
        </div>
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </motion.div>
  );
}

export default App;

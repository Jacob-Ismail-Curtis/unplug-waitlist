/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import instagramIcon from '../assets/instagram.png';
import whatsappIcon from '../assets/whatsapp.png';
import messageIcon from '../assets/message.png';

function Modal({ isOpen, onClose, email }) {
  const shareViaInstagram = () => {
    const url = 'https://www.instagram.com/';
    window.open(`https://www.instagram.com/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareViaWhatsApp = () => {
    const text = 'Check out The Unplug Club: https://www.theunplug.club';
    window.open(`whatsapp://send?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareViaMessage = () => {
    const text = 'Check out The Unplug Club: https://www.theunplug.club';
    window.open(`sms:?body=${encodeURIComponent(text)}`, '_blank');
  };

  if (!isOpen) return null;

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

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75" />
      <motion.div
        className="relative border-4 border-white p-8 rounded-lg shadow-lg text-center w-full max-w-md"
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">you've been added to the unplug club waitlist!</h2>
        <p className="text-xl font-semibold text-[#FFD9A1] mb-4">going with friends is always less scary. invite them below!</p>
        <div className="flex justify-center">
          <div className="mx-4">
            <motion.button
              onClick={shareViaInstagram}
              className="bg-transparent rounded-full focus:outline-none"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <img src={instagramIcon} alt="Instagram" className="h-12 w-12 cursor-pointer" />
            </motion.button>
          </div>
          <div className="mx-4">
            <motion.button
              onClick={shareViaWhatsApp}
              className="bg-transparent rounded-full focus:outline-none"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="h-12 w-12 cursor-pointer" />
            </motion.button>
          </div>
          <div className="mx-4">
            <motion.button
              onClick={shareViaMessage}
              className="bg-transparent rounded-full focus:outline-none"
              variants={socialIconVariants}
              whileHover="hover"
            >
              <img src={messageIcon} alt="Message" className="h-12 w-12 cursor-pointer" />
            </motion.button>
          </div>
        </div>
        <button onClick={onClose} className="mt-4 text-lg font-semibold text-white hover:text-[#FFD9A1] focus:outline-none">
          Close
        </button>
      </motion.div>
    </div>
  );
}

export default Modal;

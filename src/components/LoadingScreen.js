/* eslint-disable import/no-extraneous-dependencies */
// LoadingScreen.js
import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

function LoadingScreen() {
  // Define animation variants for the logo
  const logoVariants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        yoyo: Infinity,
      },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#FF9700] z-50"
      initial="initial"
      animate="animate"
    >
      <motion.img
        src={logo}
        alt="Unplug Logo"
        className="h-32 md:h-48 lg:h-64"
        variants={logoVariants}
      />
    </motion.div>
  );
}

export default LoadingScreen;

import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-black text-2xl text-white py-4">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="">
          {'coming soon . '.repeat(40)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

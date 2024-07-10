import React from 'react';

function Footer() {
  return (
    <footer className="relative w-full bg-black text-xl md:text-2xl lg:text-3xl text-white py-4">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="">
          {'coming soon . '.repeat(40)}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

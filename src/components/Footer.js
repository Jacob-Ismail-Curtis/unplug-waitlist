import React from 'react';

function Footer() {
  const repeatCount = 40;

  return (
    <footer className="relative w-full bg-orange-black text-xl md:text-2xl lg:text-3xl text-white py-2">
      <div className="overflow-hidden whitespace-nowrap">
        <div className="">
          {'coming soon . '.repeat(repeatCount)}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

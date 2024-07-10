import React from 'react';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import logo from './assets/unplug-logo.png';
import instagram from './assets/instagram.png';
import tiktok from './assets/tiktok.png';
import phone from './assets/phone.png';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#FF9700] text-white" style={{ backgroundColor: '#FF9700' }}>
      <header className="w-full flex justify-between items-center px-20 pt-20">
        <img src={logo} alt="Unplug Logo" className="h-24 md:h-32 lg:h-40" />
        <div className="flex space-x-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="h-12 md:h-16 lg:h-20" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok" className="h-12 md:h-16 lg:h-20" />
          </a>
        </div>
      </header>
      <main className="flex-grow flex flex-col lg:flex-row items-center justify-center text-center lg:text-left lg:px-20">
        <div className="lg:w-full lg:pr-40">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">the club that lets you</h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">disconnect to reconnect</h1>
          <p className="text-2xl md:text-3xl font-semibold mb-4" style={{ color: '#FFD9A1' }}>join the waitlist<br />be the first to hear about events</p>
          <WaitlistForm />
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src={phone} alt="Phone" className="h-72 md:h-96 lg:h-full" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

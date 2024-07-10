import React from 'react';
import WaitlistForm from './components/WaitlistForm';
import Footer from './components/Footer';
import logo from './assets/unplug-logo.png';
import instagram from './assets/instagram.png';
import tiktok from './assets/tiktok.png';
import phone from './assets/phone.png';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#FF9700] text-white">
      <header className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-10">
        <img src={logo} alt="Unplug Logo" className="h-16 md:h-24 lg:h-32" />
        <div className="flex space-x-4 md:space-x-6 lg:space-x-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="h-8 md:h-12 lg:h-16" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok" className="h-8 md:h-12 lg:h-16" />
          </a>
        </div>
      </header>
      <main className="flex-grow flex flex-col lg:flex-row items-center justify-center text-center lg:text-left lg:px-20 py-6 md:py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:w-full lg:p-4">
          <div className="lg:w-full lg:pr-32 md: pr-10 pt-10 px-2">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">the club that lets you</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">disconnect to reconnect</h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4" style={{ color: '#FFD9A1' }}>
              join the waitlist
              <br />
              be the first to hear about events
            </p>
            <WaitlistForm />
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
            <img src={phone} alt="Phone" className="h-auto lg:h-full" style={{ maxHeight: '500px' }} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import NumberTicker from './number';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="h-[100dvh] w-screen relative overflow-hidden">
      {/* Iframe covering the entire screen */}
      <iframe
        src="https://pump.fun/Hwtz95PvTNPpQeGh5GjhsbQ4tXSCz1f9aNX6Tjx6pump"
        title="Pump Fun Board"
        className="h-full w-full border-0"
        allowFullScreen
      ></iframe>

      {/* Animated heal.png rising from the bottom */}
      <motion.img
        src="heal.png"
        alt="Heal"
        initial={{ y: '100%', opacity: 0 }}
        animate={isVisible ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute -bottom-5 w-[45%] md:w-[35%] z-10"
        onClick={() => setIsVisible(!isVisible)} // Toggle visibility on click
      />

      {/* Overlaying grid and tickers on top of the iframe */}
      <div className="">
        <div className="text-5xl font-custom absolute bottom-[15%] left-[10%] text-[#52ff57] md:flex hidden">
          +<NumberTicker className="text-[#52ff57]" value={1370} />%
        </div>
        <div className="text-5xl font-custom absolute right-[17%] bottom-[28%] text-[#52ff57] flex">
          +<NumberTicker className="text-[#52ff57]" value={433} />%
        </div>
        <div className="text-5xl font-custom absolute right-[17%] top-0 md:top-[10%] text-[#52ff57] flex">
          +<NumberTicker className="text-[#52ff57]" value={629} />%
        </div>
        <div className="text-5xl font-custom absolute left-[17%] top-[35%] text-[#52ff57] flex">
          +<NumberTicker className="text-[#52ff57]" value={895} />%
        </div>
        <div className="text-5xl font-custom absolute left-[45%] top-[80%] text-[#52ff57] flex">
          +<NumberTicker className="text-[#52ff57]" value={364} />%
        </div>
        <div className="text-5xl font-custom absolute left-[22%] top-[6%] text-[#52ff57] flex">
          +<NumberTicker className="text-[#52ff57]" value={196} />%
        </div>
        <div className="text-5xl font-custom absolute right-[13%] top-[32%] text-[#52ff57] flex">
          +<NumberTicker className="text-[#52ff57]" value={115} />%
        </div>
        <div className="text-5xl font-custom absolute left-[30%] top-[55%] text-[#52ff57] flex">
          +<NumberTicker className="text-[#52ff57]" value={620} />%
        </div>
      </div>
    </div>
  );
}

export default App;
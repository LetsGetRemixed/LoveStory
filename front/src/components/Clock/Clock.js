import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Clock = () => {
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const startTime = new Date('2023-12-31T00:00:00');

    const updateClock = () => {
      const currentTime = new Date();
      const diff = currentTime - startTime;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div
        className="relative w-[1000px] h-[1000px] flex justify-center items-center bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/heart.png')", backgroundSize: "contain" }}
      >
        {/* Interactive Sections */}
        <div
          className="absolute top-[15%] left-[35%] w-[15%] h-[15%] bg-white cursor-pointer hover:scale-105 transition-transform"
          onClick={() => navigate('/section1')}
        ></div>
        <div
          className="absolute top-[15%] right-[35%] w-[15%] h-[15%] bg-transparent cursor-pointer hover:scale-105 transition-transform"
          onClick={() => navigate('/section2')}
        ></div>
        <div
          className="absolute bottom-[20%] left-[42%] w-[15%] h-[15%] bg-transparent cursor-pointer hover:scale-105 transition-transform"
          onClick={() => navigate('/section3')}
        ></div>

        {/* Clock Display */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className=" bg-opacity-70 p-6 rounded-md shadow-lg w-[80%] text-center">
            <p className="text-3xl font-bold text-white mb-4">{timeElapsed.days} Days</p>
            <p className="text-3xl font-bold text-white mb-4">{timeElapsed.hours.toString().padStart(2, '0')} Hours</p>
            <p className="text-3xl font-bold text-white mb-4">{timeElapsed.minutes.toString().padStart(2, '0')} Minutes</p>
            <p className="text-3xl font-bold text-white">{timeElapsed.seconds.toString().padStart(2, '0')} Seconds</p>
            <p className="mt-6 text-xl text-gray-300">Counting Up, Until Forever ❤️</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;






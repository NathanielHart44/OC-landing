"use client";

import { useState, useEffect } from 'react';

type CountdownType = {
    targetDate: string;
};

const Countdown = ({ targetDate }: CountdownType) => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    // Update countdown every second
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer); // Cleanup timer
    }, [targetDate]);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-4">Launching In...</h2>
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2">
          <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.days } as React.CSSProperties}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2">
          <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.hours } as React.CSSProperties}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2">
          <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.minutes } as React.CSSProperties}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2">
          <span className="countdown font-mono text-5xl">
              <span style={{ "--value": timeLeft.seconds } as React.CSSProperties}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Countdown;
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="https://nfty-temp.s3.us-west-1.amazonaws.com/IMG_0115.jpg"
          alt="Hero image"
          className="max-w-sm rounded-lg shadow-2xl"
          width={400} // Adjust as needed
          height={500} // Adjust as needed
        />
        <div>
          <h1 className="text-5xl font-bold">How We&apos;re Changing the Game...</h1>
          <p className="py-6">
            Open Colosseum is a mobile hybrid-casual game that combines unique elements from Brawl Stars and Slither.io to create an &quot;infinite MOBA&quot; where as you survive longer, you unlock new abilities, and grow in size and strength.
          </p>
          <p className="py-6">
            It features a revolutionary currency backed economy where players own their in-game assets, and the game makers monetize by driving continual demand to the tradable in-game currency.
          </p>
          <Button
            variant={'outline'}
          >Join the Discord</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

interface HeroProps {
  title: string;
  paragraphs: string[];
  buttonText?: string;
  imageUrl?: string;
  imageAlt?: string;
}

const Hero: React.FC<HeroProps> = ({ title, paragraphs, buttonText, imageUrl, imageAlt }) => {
  return (
    <div className="hero">
      <div className={`hero-content flex-col lg:flex-row ${imageUrl ? '' : 'justify-center'}`}>
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={imageAlt || 'Hero image'}
            className="max-w-sm rounded-lg shadow-2xl"
            width={400}
            height={500}
          />
        )}
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="py-6">
              {paragraph}
            </p>
          ))}
          {buttonText && (
            <Button variant={'outline'}>{buttonText}</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
import Countdown from "@/components/Countdown";
import Hero from "@/components/Hero";
import Image from "next/image";
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center justify-center">

        <h1 className="text-5xl font-bold">Open Colosseum</h1>

        <Countdown targetDate={"2024-11-11T12:00:00"} />

        <Hero 
          title="Revolutionizing the IO Genre" 
          paragraphs={[
            "After countless hours of playing IO games, we grew frustrated with the lack of medium- to long-term progression. It felt like the fun ended after just a few rounds!",
            "So, we set out to maintain the simplicity of IO games while introducing deeper peer-to-peer (P2P) skill expression, long-term progression, and more! Thus, Open Colosseum was born."
          ]}
        />

        <Hero 
          title="The First Infinite Battle Royale" 
          paragraphs={[
            "Open Colosseum combines the accessibility of games like Slither and Agar.io with the deeper mechanics of MOBAs like Brawl Stars and League of Legends.",
            "It is the world's first Infinite Battle Royale, where as you survive longer and level up, you grow stronger, bigger, and unlock new abilities!"
          ]}
          buttonText="Join the Discord"
          imageUrl="https://nfty-temp.s3.us-west-1.amazonaws.com/IMG_0115.jpg"
          imageAlt="Hero image"
        />

        <LandingTestimonialGrid
          title="What People Are Saying"
          description="Here's what some of our early testers have to say about Open Colosseum."
          testimonialItems={testimonialItems}
        />

      </main>
      <footer className="row-start-3 flex gap-12 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 mx-4"
          href="https://discord.com/invite/bqbRZzGd9d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg"
            alt="File icon"
            width={16}
            height={16}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 mx-4"
          href="https://www.tiktok.com/@opencolosseum?_t=8pstRVx6Tmg&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://i.pinimg.com/736x/57/86/b6/5786b608aeecec8db91b11bc43b5168f.jpg"
            alt="Window icon"
            width={16}
            height={16}
          />
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 mx-4"
          href="https://twitter.com/OpenColosseum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://about.x.com/content/dam/about-twitter/x/brand-toolkit/logo-white.png.twimg.1920.png"
            alt="Window icon"
            width={16}
            height={16}
          />
        </a>
      </footer>
    </div>
  );
}

// ------------------------------

const testimonialItems = [
  {
    name: 'Mathew',
    text: 'After using this, I cannot imagine going back to the old way of doing things.',
    handle: '@heymatt_oo',
    imageSrc: 'https://picsum.photos/100/100.webp?random=2',
  },
  {
    name: 'Joshua',
    text: 'Perfect for my use case',
    handle: '@joshua',
    imageSrc: 'https://picsum.photos/100/100.webp?random=3',
  },
  {
    name: 'Parl Coppa',
    text: 'This is the best thing since sliced bread. I cannot believe I did not think of it myself.',
    handle: '@coppalipse',
    imageSrc: 'https://picsum.photos/100/100.webp?random=1',
    featured: true, // Feature this testimonial
  },
  {
    name: 'Mandy',
    text: 'Excellent product!',
    handle: '@mandy',
    imageSrc: 'https://picsum.photos/100/100.webp?random=4',
  },
  {
    name: 'Alex',
    text: 'Can easily recommend!',
    handle: '@alex',
    imageSrc: 'https://picsum.photos/100/100.webp?random=5',
  },
  {
    name: 'Sam',
    text: 'I am very happy with the results.',
    handle: '@sama',
    imageSrc: 'https://picsum.photos/100/100.webp?random=6',
  },
];

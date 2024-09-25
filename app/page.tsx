import Countdown from "@/components/Countdown";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center justify-center">

        <Hero />

        <Countdown targetDate={"2024-11-11T12:00:00"} />

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

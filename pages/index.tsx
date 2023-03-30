import React from 'react';
import Image from 'next/image';
import { Element } from 'react-scroll';
import { Page } from '@/components/Page';
import Landing from '@/pages/sections/landing';
import About from '@/pages/sections/about';
import Tracks from '@/pages/sections/tracks';
import Support from '@/pages/sections/support';
import Sponsors from '@/pages/sections/sponsors';
import Faq from '@/pages/sections/faq';
import Schedule from '@/pages/sections/schedule';
import Team from '@/pages/sections/team';
import Footer from '@/components/Footer';
import FooterWaveLight from '@/public/assets/waves/footer_wave.svg';
import FooterWaveDark from '@/public/assets/waves/footer_wave_dark.svg';
import FaqBalloons from '@/public/assets/faq_balloons.svg';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme } = useTheme();

  return (
    <Page>
      <Element
        name="Home"
        className="flex justify-center w-full bg-citrus-sky bg-contain"
      >
        <span className="flex justify-center w-full">
          <Landing />
        </span>
      </Element>
      <Element name="About" className="flex justify-center w-full">
        <span className="flex justify-center w-full 2xl:bg-cover">
          <About />
        </span>
      </Element>
      <Element
        name="Tracks"
        className="flex justify-center w-full bg-sky md:bg-contain"
      >
        <span className="flex justify-center px-4 w-full 2xl:bg-cover">
          <Tracks />
        </span>
      </Element>
      <Element
        name="Schedule"
        className="relative flex justify-center w-full bg-citrus-sky bg-contain"
      >
        <Schedule />
      </Element>
      <Element name="Support" className="flex justify-center w-full bg-sky">
        <span className="flex justify-center px-4 w-full 2xl:bg-cover">
          <Support />
        </span>
      </Element>
      <Element
        name="Sponsors"
        className="flex justify-center px-4 w-full bg-gradient-to-b from-accent-secondary to-accent"
      >
        <Sponsors />
      </Element>
      <Element name="Staff" className="flex justify-center w-full bg-sky">
        <span className="flex justify-center px-4 w-full">
          <Team />
        </span>
      </Element>
      <div className="relative w-full">
        <div className="absolute w-full h-full -z-0 top-0 right-0">
          {theme === 'light' ? (
            <Image
              src={FooterWaveLight}
              alt="Wave Light"
              layout="responsive"
              objectFit="contain"
            />
          ) : (
            <Image
              src={FooterWaveDark}
              alt="Wave Dark"
              layout="responsive"
              objectFit="contain"
            />
          )}
        </div>
        <Element
          name="FAQ"
          className="flex justify-center px-4 w-full bg-gradient-to-b relative"
        >
          <Faq />
        </Element>
        <Footer />
      </div>
    </Page>
  );
}

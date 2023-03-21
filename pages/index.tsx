import { Element } from 'react-scroll';
import { Page } from '@/components/Page';
import Landing from '@/pages/sections/landing';
import About from '@/pages/sections/about';
import Tracks from '@/pages/sections/tracks';
import Support from '@/pages/sections/support';
import Sponsors from '@/pages/sections/sponsors';
import Staff from '@/pages/sections/staff';
import Faq from '@/pages/sections/faq';
import Schedule from '@/pages/sections/schedule';
import React from 'react';

export default function Home() {
  return (
    <Page>
      <Element
        name="Home"
        className="flex justify-center w-full bg-citrus-sky bg-clouds2 bg-repeat-x bg-contain"
      >
        <span className="flex justify-center w-full">
          <Landing />
        </span>
      </Element>
      <Element name="About" className="flex justify-center w-full">
        <span className="flex justify-center px-4 w-full 2xl:bg-cover">
          <About />
        </span>
      </Element>
      <Element
        name="Tracks"
        className="flex justify-center w-full bg-primary md:bg-contain"
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
      <Element
        name="Support"
        className="flex justify-center w-full bg-gradient-to-b from-accent to-card"
      >
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
      <Element name="Staff" className="flex justify-center w-full bg-primary">
        <span className="flex justify-center px-4 w-full">
          <Staff />
        </span>
      </Element>
      <Element
        name="FAQ"
        className="flex justify-center px-4 w-full bg-gradient-to-b"
      >
        <Faq />
      </Element>
    </Page>
  );
}

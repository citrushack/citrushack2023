import React from 'react';
import Image from 'next/image';
import { Element } from 'react-scroll';
import { Page } from '@/components/Page';
import Landing from '@/pages/sections/landing';
import About from '@/pages/sections/about';
import Tracks from '@/pages/sections/tracks';
import Resources from './sections/resources';
import Schedule from '@/pages/sections/schedule';
// import Judges from './sections/judges';
import Support from '@/pages/sections/support';
import Sponsors from '@/pages/sections/sponsors';
import Faq from '@/pages/sections/faq';
import Team from '@/pages/sections/team';
import Footer from '@/components/Footer';
import FooterWaveLight from '@/public/assets/waves/footer_wave.svg';
import FooterWaveDark from '@/public/assets/waves/footer_wave_dark.svg';
import { useTheme } from 'next-themes';
import sponsorBGDarkDesktop from '@/public/assets/waves/sponsorBGDarkDesktop.svg';
import sponsorBGLightDesktop from '@/public/assets/waves/sponsorBGLightDesktop.svg';
import sponsorBGDarkTablet from '@/public/assets/waves/sponsorBGDarkTablet.svg';
import sponsorBGLightTablet from '@/public/assets/waves/sponsorBGLightTablet.svg';
import sponsorBGDarkMobile from '@/public/assets/waves/sponsorBGDarkMobile.svg';
import sponsorBGLightMobile from '@/public/assets/waves/sponsorBGLightMobile.svg';

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
      <Element
        name="Schedule"
        className="relative flex justify-center px-4 w-full bg-gradient-to-b from-accent-secondary to-accent"
      >
        <Schedule />
      </Element>
      <Element name="Resources" className="flex justify-center px-4 w-full">
        <Resources />
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
      {/* <Element
        name="Judges"
        className="relative flex justify-center w-full bg-gradient-to-b from-primary to-secondary"
      >
        <span className="flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain">
          <Judges />
        </span>
      </Element> */}
      <Element name="Support" className="flex justify-center w-full bg-sky">
        <span className="flex justify-center w-full 2xl:bg-cover">
          <Support />
        </span>
      </Element>
      <div className="relative w-full">
        <div className="absolute w-full h-full -z-0 top-0 right-0">
          {theme === 'light' ? (
            <>
              <div className="max-xl:hidden ">
                <Image
                  src={sponsorBGLightDesktop}
                  alt="Wave Dark"
                  layout="responsive"
                  objectFit="contain"
                  draggable={false}
                />
              </div>
              <div className="max-sm:hidden sm:block xl:hidden">
                <Image
                  src={sponsorBGLightTablet}
                  alt="Wave Dark"
                  layout="responsive"
                  objectFit="contain"
                  draggable={false}
                />
              </div>
              <div className="block sm:hidden opacity-60 relative bottom-10">
                <Image
                  src={sponsorBGLightMobile}
                  alt="Wave Dark"
                  layout="responsive"
                  objectFit="contain"
                  draggable={false}
                />
              </div>
            </>
          ) : (
            <>
              <div className="max-xl:hidden opacity-90">
                <Image
                  src={sponsorBGDarkDesktop}
                  alt="Wave Dark"
                  layout="responsive"
                  objectFit="contain"
                  draggable={false}
                />
              </div>
              <div className="max-sm:hidden sm:block xl:hidden opacity-90">
                <Image
                  src={sponsorBGDarkTablet}
                  alt="Wave Dark"
                  layout="responsive"
                  objectFit="contain"
                  draggable={false}
                />
              </div>
              <div className="block sm:hidden relative bottom-10">
                <Image
                  src={sponsorBGDarkMobile}
                  alt="Wave Dark"
                  layout="responsive"
                  objectFit="contain"
                  draggable={false}
                />
              </div>
            </>
          )}
        </div>
        <Element
          name="Sponsors"
          className="flex justify-center px-4 w-full bg-gradient-to-b from-accent-secondary to-accent pb-20"
        >
          <Sponsors />
        </Element>
      </div>
      <Element name="Staff" className="flex justify-center w-full bg-sky pt-20">
        <span className="flex justify-center px-4 w-full">
          <Team />
        </span>
      </Element>
      <div className="relative w-full">
        <div className="absolute w-full h-full z-0 top-0 right-0">
          {theme === 'light' ? (
            <Image
              src={FooterWaveLight}
              alt="Wave Light"
              layout="responsive"
              objectFit="contain"
              draggable={false}
            />
          ) : (
            <Image
              src={FooterWaveDark}
              alt="Wave Dark"
              layout="responsive"
              objectFit="contain"
              draggable={false}
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

import { Element } from 'react-scroll';
import { ProtectedPage } from '@/components/Page';
import Landing from '@/pages/sections/live-landing';
import About from '@/pages/sections/about';
import Tracks from '@/pages/sections/tracks';
import Support from '@/pages/sections/support';
import Sponsors from '@/pages/sections/sponsors';
import Staff from '@/pages/sections/staff';
import Faq from '@/pages/sections/faq';
import Schedule from '@/pages/sections/schedule';

export default function Home() {
  return (
    // only availble on the day of event for signed-in users!
    <ProtectedPage title="Live Page" restrictions={['live', 'signin']}>
      <Element
        name="Countdown"
        className="flex justify-center w-full bg-gradient-to-b from-primary to-accent"
      >
        <span className="flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain">
          <Landing />
        </span>
      </Element>
      <Element
        name="Schedule"
        className="relative flex justify-center px-4 w-full bg-gradient-to-b from-accent-secondary to-accent"
      >
        <Schedule />
      </Element>
      <Element
        name="About"
        className="relative flex justify-center w-full bg-gradient-to-b from-primary to-secondary"
      >
        <span className="flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain 2xl:bg-cover">
          <About />
        </span>
      </Element>
      <Element name="Tracks" className="flex justify-center w-full bg-primary">
        <span className="flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain 2xl:bg-cover">
          <Tracks />
        </span>
      </Element>
      <Element
        name="Support"
        className="flex justify-center w-full bg-gradient-to-b from-accent to-card"
      >
        <span className="flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain 2xl:bg-cover">
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
        <span className="flex justify-center px-4 w-full bg-pattern bg-repeat bg-contain">
          <Staff />
        </span>
      </Element>
      <Element
        name="FAQ"
        className="flex justify-center px-4 w-full bg-gradient-to-b"
      >
        <Faq />
      </Element>
    </ProtectedPage>
  );
}

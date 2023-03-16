import { CountdownWrapper } from '@/components/Countdown';
import ExternalLink from '@/components/ExternalLink';
import { Page } from '@/components/Page';
import { motion } from 'framer-motion';
import Image from 'next/image';
import globe from '../public/assets/globe.svg';

export default function Home() {
  return (
    <Page>
      <div className="flex flex-col md:grid md:grid-cols-2 text-center h-screen justify-center items-center px-6 space-x-2">
        <div className=" col-span-1 px-2">
          <div className="py-4">
            <div className="pb-4 text-2xl md:text-6xl font-Nunito font-bold text-white">
              Citrus Hack 2023<br></br>Registration Countdown
            </div>
            <CountdownWrapper date="2023-04-03T01:00:00" />
          </div>

          <p className=" text-white/[.5] text-white text-sm md:text-lg font-Nunito">
            Feel free to email us at{' '}
            <ExternalLink
              name="citrushack@gmail.com"
              link="mailto:citrushack@gmail.com"
            />{' '}
            if you have any questions.
          </p>
        </div>
        <motion.span
          className="pr-6"
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
        >
          <Image src={globe} alt="" />
        </motion.span>
      </div>
    </Page>
  );
}

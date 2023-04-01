import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import NewFrontiers from '../../public/assets/newFrontiers.svg';
import globalCommunity from '../../public/assets/globalCommunity.svg';
import sustainability from '../../public/assets/sustainability.svg';
import cloud from '../../public/assets/cloud.svg';
import cloud2 from '../../public/assets/cloud2.svg';
import cloudDark from '../../public/assets/cloudDark.svg';
import cloudDark2 from '../../public/assets/cloudDark2.svg';
import balloon5k from '../../public/assets/balloon5k.svg';
import balloonRed from '../../public/assets/balloonRed.svg';
import { useTheme } from 'next-themes';

export const Assets = () => {
  const { theme } = useTheme();

  return (
    <>
      {/* cloud top middle */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute -top-10 left-28 md:left-96 w-16 xs:w-16 lg:w-20"
      >
        {theme === 'light' ? (
          <Image src={cloud2} alt="cloud" draggable="false" />
        ) : (
          <Image src={cloudDark2} alt="cloud" draggable="false" />
        )}
      </motion.div>
      {/*  cloud top right */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute right-0 top-[45%] md:top-0 w-14 xs:w-20 lg:w-28"
      >
        {theme === 'light' ? (
          <Image src={cloud} alt="cloud" draggable="false" />
        ) : (
          <Image src={cloudDark} alt="cloud" draggable="false" />
        )}
      </motion.div>
      {/* balloon red*/}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute max-sm:block hidden left-0 top-0 w-14 xs:w-20 lg:w-24"
      >
        <Image src={balloonRed} alt="cloud" draggable="false" />
      </motion.div>
      {/* balloon 5k */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-20 hidden sm:block left-10 -top-12 md:-top-3 w-8 xs:w-12 lg:w-24"
      >
        <Image src={balloon5k} alt="cloud" draggable="false" />
      </motion.div>
      {/* cloud bottom left */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute left-0 lg:-left-48 bottom-10 md:-bottom-32 lg:bottom-10 w-16 xs:w-20 lg:w-28"
      >
        {theme === 'light' ? (
          <Image src={cloud} alt="cloud" draggable="false" />
        ) : (
          <Image src={cloudDark} alt="cloud" draggable="false" />
        )}
      </motion.div>
      {/* cloud bottom right */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute right-0 xl:-right-16 bottom-20 xs:-bottom-14  w-16 xs:w-20 lg:w-28"
      >
        {theme === 'light' ? (
          <Image src={cloud2} alt="cloud" draggable="false" />
        ) : (
          <Image src={cloudDark2} alt="cloud" draggable="false" />
        )}
      </motion.div>
    </>
  );
};

export default function Tracks() {
  return (
    <section className="relative flex flex-col w-full h-full my-5 lg:my-3 max-w-[72rem] justify-center items-center px-4 pb-12 lg:pb-5">
      <h1 className="text-5xl md:text-7xl font-black mb-4 md:mb-8 text-text">
        Tracks
      </h1>
      <div className="flex flex-col gap-y-7 md:grid md:grid-cols-3 gap-36 lg:gap-56 items-start mb-0 lg:mb-20">
        <div className="flex flex-col items-center justify-end gap-y-2 lg:gap-y-4">
          <Image
            className="scale-90"
            src={NewFrontiers}
            alt=""
            width={170}
            height={170}
            draggable="false"
          />
          <p className="text-lg lg:text-2xl font-black text-center text-text">
            New Frontiers
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 lg:gap-y-4">
          <Image
            className="scale-90"
            src={globalCommunity}
            alt=""
            width={170}
            height={170}
            draggable="false"
          />
          <p className="text-lg lg:text-2xl font-black text-center w-fit text-text">
            Global Community
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image
            className="self-end scale-100"
            src={sustainability}
            alt=""
            width={180}
            height={180}
            draggable="false"
          />
          <p className="text-lg lg:text-2xl font-black text-center w-fit text-text">
            Sustainabiility
          </p>
        </div>
      </div>
      <Assets />
    </section>
  );
}

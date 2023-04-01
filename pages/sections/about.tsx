import Image from 'next/image';
import AboutUs from '@/public/assets/aboutUs.svg';
import Postcard from '@/public/assets/postcard.svg';
import aboutBG from '@/public/assets/aboutBG.svg';
import aboutBGDark from '@/public/assets/aboutBGDark.svg';
import React from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import balloon24 from '@/public/assets/balloon24.svg';
import balloon500 from '@/public/assets/balloon500.svg';

export const Assets = () => {
  return (
    <>
      {/* 24 hour balloon */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute max-sm:hidden z-30 left-5 xl:left-32 top-0 w-8 sm:w-12 lg:w-20 xl:w-28"
      >
        <Image src={balloon24} alt="balloon" draggable="false" />
      </motion.div>
      {/* 500+ hackers */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute max-sm:hidden z-30 right-10 xl:right-32 top-8 w-8 sm:w-12 lg:w-20 xl:w-32"
      >
        <Image src={balloon500} alt="balloon" draggable="false" />
      </motion.div>
    </>
  );
};

export default function About() {
  const { theme } = useTheme();

  return (
    <section className="relative flex flex-col w-full h-full my-8 lg:my-10 max-h-[60rem] justify-center items-center pb-0 lg:pb-14">
      <div className="w-5/6 relative left-10 xl:w-2/3 hidden mb-12 px-4 lg:mb-0 sm:inline z-10">
        <Image src={AboutUs} alt="AboutUs" draggable="false" />
      </div>
      <div className="relative w-full sm:w-5/6 px-4 sm:hidden mb-12 z-20">
        <Image src={Postcard} alt="Postcard" draggable="false" />
      </div>
      <Assets />
      <div className="absolute w-full h-full z-0">
        {theme === 'light' ? (
          <Image
            src={aboutBG}
            alt="Wave Light"
            draggable="false"
            layout="responsive"
            objectFit="contain"
          />
        ) : (
          <Image
            src={aboutBGDark}
            alt="Wave Dark"
            draggable="false"
            layout="responsive"
            objectFit="contain"
          />
        )}
      </div>
    </section>
  );
}

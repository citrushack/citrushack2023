import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import NewFrontiers from '../../public/assets/newFrontiers.svg';
import studentCommunity from '../../public/assets/studentCommunity.svg';
import sustainability from '../../public/assets/sustainability.svg';
import cloud from '../../public/assets/cloud.svg';
import balloonRed from '../../public/assets/balloonRed.svg';

export const Assets = () => {
  return (
    <>
      {/* cloud top middle */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute -top-10 left-28 md:left-96 w-16 xs:w-16 lg:w-20"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* balloon top right */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute right-0 top-[45%] md:top-0 w-14 xs:w-20 lg:w-28"
      >
        <Image src={cloud} alt="balloon" />
      </motion.div>
      {/* cloud top left */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute left-0 top-48 md:top-0 w-14 xs:w-20 lg:w-28"
      >
        <Image src={balloonRed} alt="cloud" />
      </motion.div>
      {/* cloud bottom left */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4
        }}
        className="absolute left-0 lg:-left-48 bottom-10 md:-bottom-32 lg:bottom-10 w-16 xs:w-20 lg:w-28"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* cloud bottom right */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute right-0 xl:-right-16 bottom-20 xs:-bottom-14  w-16 xs:w-20 lg:w-28"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
    </>
  );
};

export default function Tracks() {
  return (
    <section className="relative flex flex-col w-full h-full my-0 lg:my-12 max-w-[72rem] justify-center items-center px-4">
      {/* <div className="relative flex w-full my-10 px-10 flex-col items-center"> */}
      <h1 className="text-5xl md:text-7xl font-black mb-8 md:mb-14">Tracks</h1>
      <div className="flex flex-col gap-y-7 md:grid md:grid-cols-3 gap-36 lg:gap-56 items-start mb-0 lg:mb-20">
        {/* <div className="flex justify-start items-start bg-blue-500"> */}
        <div className="flex flex-col items-center justify-end gap-y-2 lg:gap-y-4">
          <Image
            className=""
            src={NewFrontiers}
            alt=""
            width={170}
            height={170}
          />
          <p className="text-lg md:text-2xl font-black text-center">
            New Frontiers
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 lg:gap-y-4">
          <Image
            className=""
            src={studentCommunity}
            alt=""
            width={170}
            height={170}
          />
          <p className="text-lg md:text-2xl font-black text-center w-fit">
            Global Community
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-2 lg:gap-y-4">
          <Image
            className="self-end"
            src={sustainability}
            alt=""
            width={170}
            height={170}
          />
          <p className="text-lg md:text-2xl font-black text-center w-fit">
            Sustainabiility
          </p>
        </div>
      </div>
      <Assets />
      {/* </div> */}
    </section>
  );
}

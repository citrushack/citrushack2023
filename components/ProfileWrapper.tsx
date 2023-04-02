import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const ProfileWrapper = ({ name, position, link, image }) => {
  const [isHover, setIsHover] = useState(false);
  const { theme } = useTheme();
  return (
    <div className="relative flex flex-col w-full max-w-[8rem] md:max-w-[9rem] items-center">
      <motion.div
        className={
          'hidden absolute z-0 cursor-pointer opacity-100 flex-col items-center justify-center w-full h-full pb-4 text-center transition-opacity duration-300 ease-in-out ' +
          (isHover ? 'md:flex' : 'hidden ')
        }
      >
        <p className="mb-0 w-max text-text font-bold">{name}</p>
        <p
          className={`mt-0 leading-4 text-center  ${
            theme === 'light' ? `text-brown` : `text-gold`
          }`}
        >
          {position}
        </p>
      </motion.div>
      <motion.div
        className="cursor-pointer z-10"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 0.1, y: -4 }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <a target="_blank" rel="noreferrer noopener" href={link}>
          <Image
            src={image}
            width={170}
            height={170}
            objectFit="contain"
            priority={true}
            quality={100}
            className="rounded-full mt-5"
            alt="profile photo"
            draggable={false}
          />
        </a>
      </motion.div>
      <div className="flex flex-col items-center lg:hidden justify-center">
        <p className="mb-0 w-max font-baloo_semi_bold text-text text-center">
          {name}
        </p>
        <p
          className={`mt-0 leading-4 text-center font-baloo_regular ${
            theme === 'light' ? `text-brown` : `text-gold`
          } w-max`}
        >
          {position}
        </p>
      </div>
    </div>
  );
};

export default ProfileWrapper;

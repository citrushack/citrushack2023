/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

interface SponsorProps {
  /** Sponsor tier (e.g. 'cutie'). */
  type: string;
  /** Path to sponsor logo (e.g. /assets/sponsors/google-cloud.svg). */
  image: string;
  /** Width of sponsor logo. */
  width: number;
  /** Height of sponsor logo. */
  height: number;
  /** Link to sponsor website. */
  link: string;
  /** Decides whether to shrink the sponsor logo if it appears larger than others in the same tier. */
  shrink?: boolean;
  /** Decides whether to shrink the sponsor logo even more if it still appears larger than others in the same tier. */
  tall?: boolean;
}

/** Individual sponsor logo linked to sponsor website. */
export const Sponsor = ({
  type,
  image,
  width,
  height,
  link,
  shrink,
  tall,
}: SponsorProps) => (
  <div
    className={
      'flex items-center min-h-[10rem] ' +
      (type === 'kumquat'
        ? 'w-32 md:w-36 ' +
          (shrink ? 'w-16 md:w-24' : '') +
          (tall ? 'w-12 md:w-20' : '')
        : type === 'cutie'
        ? 'w-32 md:w-36 ' +
          (shrink ? 'w-16 md:w-24' : '') +
          (tall ? 'w-12 md:w-20' : '')
        : type === 'tangerine'
        ? 'w-32 md:w-36 ' +
          (shrink ? 'w-24 md:w-28' : '') +
          (tall ? 'w-18 md:w-24' : '')
        : type === 'orange'
        ? 'w-32 md:w-36 ' +
          (shrink ? 'w-[6.5rem] md:w-32' : '') +
          (tall ? 'w-18 md:w-20' : '')
        : type === 'pomelo'
        ? 'w-40 md:w-48 ' +
          (shrink ? 'w-24 md:w-32' : '') +
          (tall ? 'w-20 md:w-28' : '')
        : '')
    }
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.995 }}
      className="w-full transform-gpu"
    >
      <a target="_blank" rel="noreferrer noopener" href={link}>
        <Image
          src={image}
          width={width}
          height={height}
          quality={50}
          priority={Boolean(true)}
          layout="responsive"
          objectFit="contain"
        />
      </a>
    </motion.div>
  </div>
);

export function CarouselSponsor() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setIsFlipped(!isFlipped);
    }
  };

  const handleHoverStart = () => {
    if (window.innerWidth > 768) {
      setIsFlipped(true);
    }
  };

  const handleHoverEnd = () => {
    if (window.innerWidth > 768) {
      setIsFlipped(false);
    }
  };
  return (
    <div className="carousel carousel-center w-full h-72 md:p-4 space-x-4 bg-lightPurple rounded-box">
      <motion.div
        className=" w-11/12 h-auto max-w-md relative carousel-item"
        onClick={handleClick}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <motion.div
          className="w-full h-full bg-blue absolute top-0 left-0 flex items-center justify-center backface-hidden"
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform .5s ease-in-out',
          }}
        >
          <img
            src="/assets/sponsors/sponsor_postcard1.svg"
            className="rounded-box"
          />
        </motion.div>
        <motion.div
          className="w-full h-full absolute top-0 left-0 flex items-center justify-center backface-hidden"
          style={{
            transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)',
            transition: 'transform .5s ease-in-out',
          }}
        >
          <img
            src="/assets/sponsors/sponsor_postcard1_back.svg"
            className="rounded-box"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className=" w-11/12 h-auto max-w-md relative carousel-item"
        onClick={handleClick}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <motion.div
          className="w-full h-full bg-blue absolute top-0 left-0 flex items-center justify-center backface-hidden"
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform .5s ease-in-out',
          }}
        >
          <img
            src="/assets/sponsors/sponsor_postcard2.svg"
            className="rounded-box"
          />
        </motion.div>
        <motion.div
          className="w-full h-full absolute top-0 left-0 flex items-center justify-center backface-hidden"
          style={{
            transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)',
            transition: 'transform .5s ease-in-out',
          }}
        >
          <img
            src="/assets/sponsors/sponsor_postcard2_back.svg"
            className="rounded-box"
          />
        </motion.div>
      </motion.div>
      <motion.div
        className=" w-11/12 h-auto max-w-md relative carousel-item"
        onClick={handleClick}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        <motion.div
          className="w-full h-full bg-blue absolute top-0 left-0 flex items-center justify-center backface-hidden"
          style={{
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform .5s ease-in-out',
          }}
        >
          <img
            src="/assets/sponsors/sponsor_postcard3.svg"
            className="rounded-box"
          />
        </motion.div>
        <motion.div
          className="w-full h-full absolute top-0 left-0 flex items-center justify-center backface-hidden"
          style={{
            transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)',
            transition: 'transform .5s ease-in-out',
          }}
        >
          <img
            src="/assets/sponsors/sponsor_postcard3_back.svg"
            className="rounded-box"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

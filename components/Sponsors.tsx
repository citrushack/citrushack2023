/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Carousel from 'framer-motion-carousel';
import SponsorButton from './SponsorButton';
import React from 'react';

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
  tall
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
  const bounceVariants = {
    initial: {
      y: 0
    },
    animate: {
      y: -10,
      transition: {
        duration: 0.5,
        repeat: 1,
        repeatType: 'reverse'
      }
    }
  };
  const [bounce, setBounce] = React.useState(false);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setBounce(!bounce);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [bounce]);

  return (
    // remove scrollbar when hovering over sponsor us button
    <>
      <div style={{ width: 1186, height: 600 }} className="hidden md:block">
        <Carousel autoPlay={true} interval={3000} loop={true}>
          {[
            ['amazon', '/citrushack-2022-sponsorship-packet.pdf'],
            ['amazon', '/citrushack-2022-sponsorship-packet.pdf'],
            ['amazon', '/citrushack-2022-sponsorship-packet.pdf']
          ].map((item, i) => (
            <div key={i}>
              <Image
                draggable="false"
                src={`/assets/sponsors/${item[0]}.svg`}
                key={i}
                layout="fill"
                alt=""
              />
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.995 }}
                className="absolute right-0 bottom-0 pr-4"
                variants={bounceVariants as Variants}
                animate={bounce ? 'animate' : 'initial'}
              >
                <SponsorButton link={item[1]} width={400} height={180} />
              </motion.span>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="md:hidden flex justify-center items-center w-screen h-60">
        <Carousel autoPlay={true} interval={3000} loop={true}>
          {[
            ['amazon', '/citrushack-2022-sponsorship-packet.pdf'],
            ['amazon', '/citrushack-2022-sponsorship-packet.pdf'],
            ['amazon', '/citrushack-2022-sponsorship-packet.pdf']
          ].map((item, i) => (
            <div key={i}>
              <Image
                draggable="false"
                src={`/assets/sponsors/${item[0]}.svg`}
                key={i}
                layout="fill"
                alt=""
              />
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.995 }}
                className="absolute right-0 bottom-0 w-40"
                variants={bounceVariants as Variants}
                animate={bounce ? 'animate' : 'initial'}
              >
                <SponsorButton link={item[1]} width={150} height={60} />
              </motion.span>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import orange from '@/public/assets/sponsors/orange_sponsor_orange.svg';

interface SponsorProps {
  /** Sponsor tier (e.g. 'cutie'). */
  type: string;
  /** Path to sponsor logo (e.g. /assets/sponsors/google-cloud.svg). */
  image: string;
  /** Path to sponsor logo in dark mode */
  imageDark?: string;
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
  /** what tailwindcss class to add for border */
  border?: string;
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
  border
}: SponsorProps) => (
  // bg white is up here for a default bg color (also needs to be rounded haha)
  <div className={'flex items-center bg-white rounded-full '}>
    <a target="_blank" rel="noreferrer noopener" href={link}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.995 }}
        className={
          'transform-gpu rounded-full border-6 grid content-center ' +
          (shrink ? 'p-[2rem] ' : 'p-[0.6rem] ') +
          ((border || '') + ' ') +
          (type === 'cutie'
            ? 'w-24 h-24 md:w-28 md:h-28 ' +
              (false && shrink ? 'w-16 md:w-24' : '') +
              (false && tall ? 'w-12 md:w-20' : '')
            : type === 'tangerine'
            ? 'w-28 h-28 md:w-36 md:h-36 ' +
              (false && shrink ? 'w-24 md:w-28' : '') +
              (false && tall ? 'w-18 md:w-24' : '')
            : type === 'orange'
            ? 'w-32 h-32 md:w-44 md:h-44 ' +
              (false && shrink ? 'w-24 md:w-28' : '') +
              (false && tall ? 'w-18 md:w-24' : '')
            : '')
        }
      >
        <Image
          src={image}
          alt="sponsor"
          width={width}
          height={height}
          quality={50}
          priority={Boolean(true)}
          layout="responsive"
          objectFit="contain"
          draggable={false}
        />
      </motion.div>
    </a>
  </div>
);

const tiers = [
  {
    type: 'orange',
    wide: true,
    sponsors: [
      {
        image: '/assets/sponsors/aspb.png',
        width: 1080,
        height: 1080,
        link: 'https://aspb.ucr.edu/',
        border: 'border-[#003DA5]'
      },
      {
        image: '/assets/sponsors/gcap.png',
        width: 2500,
        height: 1330,
        link: 'https://www.gcapucr.com/aboutgcap',
        border: 'border-[#74B053]'
      },
      {
        image: '/assets/sponsors/coolerMaster.png',
        width: 300,
        height: 237,
        link: 'https://www.coolermaster.com/',
        shrink: true,
        border: 'border-[#1D252C]'
      }
    ]
  },
  {
    type: 'tangerine',
    wide: Boolean(true),
    sponsors: [
      {
        image: '/assets/sponsors/blackstone.png',
        width: 690,
        height: 150,
        link: 'https://www.blackstonelaunchpad.org/'
      },
      {
        image: '/assets/sponsors/acm.webp',
        width: 1080,
        height: 1080,
        link: 'https://acm.cs.ucr.edu/',
        border: 'border-[#4185FC]'
      },
      {
        image: '/assets/sponsors/triad.png',
        width: 371,
        height: 85,
        link: 'https://www.triadmagnetics.com/',
        border: 'border-[#FFB624]'
      }
    ]
  },
  {
    type: 'cutie',
    wide: Boolean(true),
    sponsors: [
      {
        image: '/assets/sponsors/redbull.png',
        width: 580,
        height: 335,
        link: 'https://www.redbull.com/us-en/',
        border: 'border-[#FF0000] bg-[#FCF1BF]'
      },
      {
        image: '/assets/sponsors/wolfram.png',
        width: 529,
        height: 413,
        link: 'https://www.wolframalpha.com/',
        border: 'border-[#DD1100] p-[1rem]'
      },
      {
        image: '/assets/sponsors/desmos.png',
        width: 435,
        height: 435,
        link: 'https://desmos.com/',
        border: 'border-[#138141] p-[1.4rem]'
      },
      {
        image: '/assets/sponsors/stickermule.png',
        width: 442,
        height: 259,
        link: 'https://mule.to/p3go',
        border: 'border-[#4C2418] bg-[#E0BDAE]'
      },
      {
        image: '/assets/sponsors/echo3d.png',
        width: 536,
        height: 362,
        link: 'https://www.echo3d.com/',
        border: 'border-[#28C1FD] bg-[#002D64]'
      },
      {
        image: '/assets/sponsors/tensorflow.png',
        width: 636,
        height: 409,
        link: 'https://www.tensorflow.org/',
        border: 'border-[#F59121] bg-[#FFDCBC]'
      },
      {
        image: '/assets/sponsors/ucrBotanic.png',
        width: 469,
        height: 490,
        link: 'https://gardens.ucr.edu/',
        border: 'border-[#708652] p-[1rem]'
      },
      {
        image: '/assets/sponsors/balsamiq.png',
        width: 1024,
        height: 327,
        link: 'https://balsamiq.com/',
        border: 'border-[#CC0100] bg-[#FFD6D6]'
      },
      {
        image: '/assets/sponsors/googleCloud.svg',
        width: 1200,
        height: 600,
        link: 'https://cloud.google.com/',
        border: 'border-rainbow bg-[#424242]'
      },
      {
        image: '/assets/sponsors/glico.png',
        width: 300,
        height: 117,
        link: 'https://www.glico.com/global/',
        border: 'border-[#E70012] p-[1rem]'
      },
      {
        image: '/assets/sponsors/sketch.png',
        width: 512,
        height: 460,
        link: 'https://sketch.com/',
        border: 'border-[#FDAD00] p-[1rem]'
      },
      {
        image: '/assets/sponsors/ieee-dark.svg',
        width: 745,
        height: 959,
        link: 'https://ieee.ucr.edu/',
        border: 'border-[#0085FF] bg-[#271D50] p-[1.5rem]'
      },
      {
        image: '/assets/sponsors/stickers.svg',
        width: 900,
        height: 700,
        link: 'https://www.standoutstickers.com/',
        border: 'border-[#49C5B1] bg-white p-[1.5rem]'
      }
    ]
  }
];

/** Grid of sponsors of all specified tiers. */
export function SponsorsGrid() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="relative grid grid-cols-2 gap-6 mt-10  px-3">
      {tiers
        .filter(({ sponsors }) => sponsors.length > 0) // only map tiers with sponsors
        .map(({ type, sponsors, wide }) => (
          <div
            key={type}
            className={
              'relative flex flex-wrap justify-center w-full gap-4 md:gap-10 p-10 rounded-md overflow-hidden ' +
              (wide ? 'col-span-2' : 'col-span-2 sm:col-span-1')
            }
          >
            <span
              className={`flex lg:hidden absolute left-[1.15rem] top-[5rem] transform h-full z-100 w-[3px]  ${
                theme === 'dark'
                  ? `bg-gradient-to-b from-[#92B66F] to to-transparent`
                  : `bg-gradient-to-b from-lightgreen to to-transparent`
              } z-50 px-0 pointer-events-none`}
            ></span>
            <span className="block lg:hidden mr-1 w-10 left-0 absolute z-[9999] bg-transparent px-0">
              <Image
                src={orange}
                alt="orange"
                draggable={false}
                width={200}
                height={200}
                layout="responsive"
              />
            </span>
            <span
              className={`hidden lg:flex absolute left-[2.3rem] top-[7.5rem] transform h-full z-100 w-[4px] ${
                theme === 'dark'
                  ? `bg-gradient-to-b from-[#92B66F] to to-transparent`
                  : `bg-gradient-to-b from-lightgreen to to-transparent`
              } z-50 px-0 pointer-events-none`}
            ></span>
            <span className="hidden lg:block mr-1 w-20 left-0 absolute z-[9999] bg-transparent px-0">
              <Image
                src={orange}
                alt="orange"
                draggable={false}
                width={200}
                height={200}
                layout="responsive"
              />
            </span>
            {sponsors.map(
              ({
                image,
                imageDark,
                width,
                height,
                link,
                shrink,
                tall,
                border
              }) => (
                <Sponsor
                  key={link}
                  type={type}
                  image={
                    image || imageDark /*theme === 'light' ? image : imageDark*/
                  } // imageDark sitting there so typescript doesnt explode (idk why but imageDark HAS to be there and you HAVE to use it or eslint explodes instead)
                  width={width}
                  height={height}
                  link={link}
                  shrink={shrink}
                  tall={tall}
                  border={border}
                />
              )
            )}
          </div>
        ))}
    </div>
  );
}

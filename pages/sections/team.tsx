import React from 'react';
import ProfileWrapper from '@/components/ProfileWrapper';
import Minsoo from '@/public/team/minsoo.png';
import Ashley from '@/public/team/ashley.png';
import Gab from '@/public/team/gab.png';
import Jakin from '@/public/team/jakin.jpg';
import Mariam from '@/public/team/mariam.png';
import Henry from '@/public/team/henry.png';
import Paulian from '@/public/team/paulian.png';
import Kanin from '@/public/team/kanin.png';
import Prathmesh from '@/public/team/prathmesh.png';
import Vivian from '@/public/team/vivian.png';
import Sarah from '@/public/team/sarah.png';
import Alex from '@/public/team/alex.png';
import Jon from '@/public/team/jon.png';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import teamWaveDark from '@/public/assets/waves/teamWaveDark.svg';
import teamWaveLight from '@/public/assets/waves/teamWave.svg';
import cloud from '../../public/assets/cloud.svg';
import cloud2 from '../../public/assets/cloud2.svg';
import cloudDark from '../../public/assets/cloudDark.svg';
import cloudDark2 from '../../public/assets/cloudDark2.svg';
import plane from '../../public/assets/tiltedPlane.svg';
import bird1 from '../../public/assets/bird1.svg';
import star from '../../public/assets/star.svg';
import balloonOrange from '../../public/assets/balloonOrange.svg';

const directors = [
  {
    link: 'https://www.linkedin.com/in/henry-zheng00/',
    image: Henry,
    name: 'Henry Zheng',
    position: 'Director'
  },
  {
    link: 'https://www.linkedin.com/in/mariam-golwalla-74930949/',
    image: Mariam,
    name: 'Mariam Golwalla',
    position: 'Director'
  }
];
const staff = [
  {
    link: 'https://www.linkedin.com/in/minsookime/',
    image: Minsoo,
    name: 'Minsoo Kim',
    position: 'Software Engineer'
  },
  {
    link: 'https://www.linkedin.com/in/nathan-melwani/',
    image: Paulian,
    name: 'Paulian Le',
    position: 'Software Engineer'
  },
  {
    link: 'https://www.linkedin.com/in/ashley-h-pham',
    image: Ashley,
    name: 'Ashley Pham',
    position: 'Operations'
  },
  {
    link: 'https://www.linkedin.com/in/kanin-liang/',
    image: Kanin,
    name: 'Kanin Liang',
    position: 'Operations'
  },
  {
    link: 'https://www.linkedin.com/in/prathmeshjain/',
    image: Prathmesh,
    name: 'Prathmesh Jain',
    position: 'Operations'
  },
  {
    link: 'https://www.linkedin.com/in/jakin200/',
    image: Jakin,
    name: 'Jakin Chan',
    position: 'Operations'
  },
  {
    link: 'https://www.linkedin.com/in/viviane-fernando-60282018b/',
    image: Vivian,
    name: 'Viviane Fernando',
    position: 'Marketing'
  },
  {
    link: 'https://www.linkedin.com/in/sarahkim9/',
    image: Sarah,
    name: 'Sarah Kim',
    position: 'Marketing'
  },
  {
    link: 'https://www.linkedin.com/in/gabriela-h-alvarez/',
    image: Gab,
    name: 'Gabriela Alvarez',
    position: 'Sponsorship'
  },
  {
    link: 'https://www.linkedin.com/in/alex-c-hsieh/',
    image: Alex,
    name: 'Alex Hsieh',
    position: 'Sponsorship'
  },
  {
    link: 'https://www.linkedin.com/in/jonathanchon/',
    image: Jon,
    name: 'Jonathan Chon',
    position: 'UI/UX'
  }
];

const swe_committee = [
  'Thomas Li',
  'Bobby Lerias',
  'Andre Amante',
  'Raidah Fairooz',
  'Kirtana Venkat'
];

const sponsorship_committee = [
  'Jasmita Yechuri',
  'Javier Herrera Jr.',
  'Freddy Song',
  'Joseph Hoang',
  'Javier Vargas',
  'Brian Uong',
  'Adreyan Distor',
  'Minnoli Nori',
  'Isabelle Celo',
  'Felix Maass',
  'Suhani Chaudhary'
];

const operations_committee = ['Ronit Bhushan', 'Sneha Panda', 'Ethan Quach'];

export const Assets = () => {
  const { theme } = useTheme();

  return (
    <>
      {/* plane */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute z-20 max-lg:hidden left-10 xl:left-[10%] top-[20%] xl:top-[15%] w-28 md:w-40 lg:w-48 xl:w-64"
      >
        <Image src={plane} alt="cloud" />
      </motion.div>
      {/* cloud top left */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-10 max-[375px]:hidden left-10 xl:left-[10%] top-44 sm:top-28 xl:top-20  w-20 sm:w-28 md:w-32 lg:w-48 xl:w-64"
      >
        {theme === 'light' ? (
          <Image src={cloud2} alt="cloud" />
        ) : (
          <Image src={cloudDark2} alt="cloud" />
        )}
      </motion.div>
      {/* birf top right */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-10 max-md:hidden right-10 top-52 w-20  xl:w-24"
      >
        {theme === 'light' ? (
          <Image src={bird1} alt="bird" />
        ) : (
          <Image src={star} alt="cloud" />
        )}
      </motion.div>
      {/* cloud bottom left */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-30 max-md:hidden left-0 md:left-10 bottom-10 md:-bottom-52 w-16 sm:w-24 xl:w-32"
      >
        {theme === 'light' ? (
          <Image src={cloud} alt="cloud" />
        ) : (
          <Image src={cloudDark} alt="cloud" />
        )}
      </motion.div>
      {/* cloud bottom left */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-30 max-md:hidden left-0 lg:left-0 xl:left-32 -bottom-96 lg:-bottom-96 xl:-bottom-96 w-12 xl:w-24"
      >
        <Image src={balloonOrange} alt="cloud" />
      </motion.div>
      {/* cloud bottom right */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-20 right-10 max-md:hidden -bottom-[150%] xs:-bottom-[45%] sm:-bottom-[35%] md:-bottom-12 xl:bottom-56 w-16 sm:w-24 xl:w-32"
      >
        {theme === 'light' ? (
          <Image src={cloud2} alt="cloud" />
        ) : (
          <Image src={cloudDark2} alt="cloud" />
        )}
      </motion.div>
      {/* balloon */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute z-40 right-6 -bottom-[150%] max-md:hidden xs:-bottom-[45%] sm:-bottom-[35%] md:-bottom-52 xl:bottom-0 w-10 xs:w-20 xl:w-32"
      >
        {theme === 'light' ? (
          <Image src={bird1} alt="bird" />
        ) : (
          <Image src={star} alt="cloud" />
        )}
      </motion.div>
      {/* cloud bottom right */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-50 max-[375px]:hidden sm:hidden right-0 -bottom-[77%] w-14"
      >
        {theme === 'light' ? (
          <Image src={bird1} alt="bird" />
        ) : (
          <Image src={star} alt="cloud" />
        )}
      </motion.div>
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-50 max-[375px]:hidden sm:hidden left-0 -bottom-[72%] w-14"
      >
        {theme === 'light' ? (
          <Image src={bird1} alt="bird" />
        ) : (
          <Image src={star} alt="cloud" />
        )}
      </motion.div>
      {/* cloud bottom right */}
      {/* <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-20 max-[375px]:hidden sm:hidden right-0 -bottom-[77%] w-14"
      >
        {theme === 'light' ? (
          <Image src={cloud} alt="bird" />
        ) : (
          <Image src={cloudDark} alt="cloud" />
        )}
      </motion.div> */}
      {/* cloud top left */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-10 max-[375px]:hidden left-10 top-44 sm:top-28 w-20 sm:w-28 sm:hidden"
      >
        {theme === 'light' ? (
          <Image src={bird1} alt="bird" />
        ) : (
          <Image src={star} alt="cloud" />
        )}
      </motion.div>
    </>
  );
};

const team = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme } = useTheme();

  return (
    <section className="flex flex-col w-full h-full lg:mb-10 max-w-[75rem] pb-10">
      <div className="relative z-10 flex flex-col flex-wrap justify-center gap-8 md:gap-12 md:gap-y-6 mb-12">
        <p className="text-center text-5xl md:text-7xl font-black not-italic items-center text-text">
          Meet The Team
        </p>
        <p className="text-opposite text-xl md:text-2xl font-baloo_semi_bold text-center px-4 text-text font-semibold">
          The Leads
        </p>
        <div className="relative z-10 flex flex-wrap justify-center gap-6 md:gap-10 md:gap-y-12 ">
          {directors.map(({ link, image, name, position }) => (
            <ProfileWrapper
              key={link}
              link={link}
              image={image}
              name={name}
              position={position}
            />
          ))}
        </div>
      </div>
      <div className="relative z-20 flex flex-wrap justify-center gap-6 gap-y-10 md:gap-10 md:gap-y-12">
        {staff.map(({ link, image, name, position }) => (
          <ProfileWrapper
            key={link}
            link={link}
            image={image}
            name={name}
            position={position}
          />
        ))}
      </div>
      <div className="absolute w-screen h-screen -z-0 right-0">
        <Assets />
        {theme === 'light' ? (
          <Image
            src={teamWaveLight}
            alt="Wave Light"
            layout="responsive"
            objectFit="contain"
          />
        ) : (
          <Image
            src={teamWaveDark}
            alt="Wave Dark"
            layout="responsive"
            objectFit="contain"
          />
        )}
      </div>
      {/* commitee members */}
      <div className="relative z-8  pt-10 md:pt-20 flex flex-col">
        <div className="flex flex-col">
          <p className="text-xl md:text-2xl text-center font-semibold pb-4 text-text mt-10 sm:mt-0">
            The Committee Members
          </p>
          {/* <div className="flex flex-row"> */}
          <div className="flex flex-col sm:flex-row justify-center text-center gap-8 xs:gap-10">
            <div>
              <p className="text-xl font-medium text-text">Operations</p>
              {operations_committee.map((member, index) => (
                <p key={index} className="text-lightPurple">
                  {member}
                </p>
              ))}
            </div>
            <div>
              <p className="text-xl font-medium text-text">Sponsorship</p>
              {sponsorship_committee.map((member, index) => (
                <p key={index} className="text-lightPurple">
                  {member}
                </p>
              ))}
            </div>
            <div>
              <p className="text-xl font-medium text-text">
                Software Engineers
              </p>
              {swe_committee.map((member, index) => (
                <p key={index} className="text-lightPurple">
                  {member}
                </p>
              ))}
            </div>
            {/* </div> */}
          </div>

          {/* <div className="flex flex-row justify-center space-x-12">
            <div>
              <div className="flex justify-center pb-2 text-text">
                ⚙️ SWE ⚙️
              </div>
              <div>
                {swe_committee.map((member, index) => (
                  <p key={index} className="text-lightPurple">
                    {member}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <div className="flex justify-center pb-2 text-text">
                💰 Sponsorship 💰
              </div>
              {sponsorship_committee.map((member, index) => (
                <p key={index} className="text-lightPurple">
                  {member}
                </p>
              ))}
            </div>
            <div>
              <div className="flex justify-center pb-2 text-text">
                ✏️ Operations ✏️
              </div>
              {operations_committee.map((member, index) => (
                <p key={index} className="text-lightPurple">
                  {member}
                </p>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default team;

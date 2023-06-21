import React from 'react';
import ProfileWrapper from '@/components/ProfileWrapper';
import Minsoo from '@/public/team/minsoo.png';
import Mika from '@/public/team/mika.png';
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
import bird3 from '../../public/assets/bird3.svg';
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
    link: 'https://www.linkedin.com/in/mika-shanela/',
    image: Mika,
    name: 'Mika Shanela',
    position: 'Software Engineer'
  },
  {
    link: 'https://www.linkedin.com/in/paulianle/',
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
  {
    link: 'https://www.linkedin.com/in/thomasli9/',
    name: 'Thomas Li'
  },
  {
    link: 'https://www.linkedin.com/in/robertlerias/',
    name: 'Bobby Lerias'
  },
  {
    link: 'https://www.linkedin.com/in/andreamantee/',
    name: 'Andre Amante'
  },
  {
    link: 'https://www.linkedin.com/in/raidah-fairooz-78b1a8146/',
    name: 'Raidah Fairooz'
  },
  {
    link: 'https://www.linkedin.com/in/kirtanavenkat/',
    name: 'Kirtana Venkat'
  }
];

const operations_committee = [
  {
    link: 'https://www.linkedin.com/in/rrbhushan/',
    name: 'Ronit Bhushan'
  },
  {
    link: 'https://www.linkedin.com/in/sneha-pandaa',
    name: 'Sneha Panda'
  },
  {
    link: 'https://www.linkedin.com/in/ethan-quach-010a05230',
    name: 'Ethan Quach'
  }
];
const marketing_committee = [
  {
    link: 'https://www.linkedin.com/in/anjaline-singh-450735258/',
    name: 'Anjaline Singh'
  },
  {
    link: 'https://www.linkedin.com/in/josalyn-chow/',
    name: 'Josalyn Chow'
  },
  {
    link: 'https://www.linkedin.com/in/elaine-lin02/',
    name: 'Elaine Lin'
  }
];

const sponsorhip_committee = [
  {
    link: 'https://www.linkedin.com/in/jasmita-yechuri-0b7a871bb/',
    name: 'Jasmita Yechuri'
  },
  {
    link: 'https://www.linkedin.com/in/javier-herrera-jr-832717264/',
    name: 'Javier Herrera Jr.'
  },
  {
    link: 'https://www.linkedin.com/in/freddy-song-428677212/',
    name: 'Freddy Song'
  },
  {
    link: 'https://www.linkedin.com/in/joseph-hoang04/',
    name: 'Joseph Hoang'
  },
  {
    link: 'https://www.linkedin.com/in/javier-vargas-b50104245',
    name: 'Javier Vargas'
  },
  {
    link: 'https://www.linkedin.com/in/brian-uong-2a156b257/',
    name: 'Brian Uong'
  },
  {
    link: 'https://www.linkedin.com/in/felix-maass-3754871b8',
    name: 'Felix Maass'
  },
  {
    link: 'https://www.linkedin.com/in/suhani-chaudhary-25a476244',
    name: 'Suhani Chaudhary'
  },
  {
    link: 'https://www.linkedin.com/in/huong-le-87345a254//',
    name: 'Huong Le'
  },
  {
    link: null,
    name: 'Adreyan Distor'
  },
  {
    link: null,
    name: 'Minnoli Nori'
  },
  {
    link: null,
    name: 'Isabelle Celo'
  },
  {
    link: null,
    name: 'Dhriti Veeramachaneni'
  }
];

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
        <Image src={plane} alt="cloud" draggable={false} />
      </motion.div>
      {/* cloud top left */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-10 max-[375px]:hidden left-10 xl:left-[10%] -top-20 sm:top-28 xl:top-20  w-20 sm:w-28 md:w-32 lg:w-48 xl:w-64"
      >
        {theme === 'light' ? (
          <Image src={cloud2} alt="cloud" draggable={false} />
        ) : (
          <Image src={cloudDark2} alt="cloud" draggable={false} />
        )}
      </motion.div>
      {/* birf top right */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-10 max-md:hidden right-10 top-52 w-20  xl:w-24 "
      >
        {theme === 'light' ? (
          <Image src={bird1} alt="bird" draggable={false} />
        ) : (
          <Image src={star} alt="star" draggable={false} />
        )}
      </motion.div>
      {/* cloud bottom left */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-30 max-md:hidden left-0 md:left-10 bottom-10 lg:-bottom-[5%] md:-bottom-[15%] w-16 sm:w-24 xl:w-32"
      >
        {theme === 'light' ? (
          <Image src={cloud} alt="cloud" draggable={false} />
        ) : (
          <Image src={cloudDark} alt="cloud" draggable={false} />
        )}
      </motion.div>
      {/* cloud bottom left */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute max-md:hidden left-0 lg:left-0 xl:left-32 -bottom-48 md:-bottom-[25%] lg:-bottom-28 xl:-bottom-64 w-12 xl:w-24 z-[1000]"
      >
        <Image src={balloonOrange} alt="balloon" draggable={false} />
      </motion.div>
      {/* bird */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute z-40 right-6 -bottom-[150%] max-md:hidden xs:-bottom-[45%] sm:-bottom-[35%] md:-bottom-52 bg xl:bottom-0 w-10 xs:w-20 xl:w-32"
      >
        {theme === 'light' ? (
          <Image src={bird1} alt="bird" draggable={false} />
        ) : (
          <Image src={star} alt="cloud" draggable={false} />
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
          <Image src={bird3} alt="bird" draggable={false} />
        ) : (
          <Image src={star} alt="star" draggable={false} />
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
          <Image src={bird1} alt="bird" draggable={false} />
        ) : (
          <Image src={star} alt="star" draggable={false} />
        )}
      </motion.div>
      {/* bird top left */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-10 max-[375px]:hidden left-10 -top-16 sm:top-16 w-20 sm:w-28"
      >
        {theme === 'light' ? (
          <Image src={bird1} alt="bird" draggable={false} />
        ) : (
          <Image src={star} alt="star" draggable={false} />
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
        <p className="text-opposite text-xl md:text-2xl font-baloo_semi_bold text-center px-4 text-text font-bold">
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
          <>
            <div className="max-lg:hidden block">
              <Image
                src={teamWaveLight}
                alt="Wave Light"
                layout="responsive"
                objectFit="contain"
                draggable={false}
              />
            </div>
            <div className="block lg:hidden relative top-[50%]">
              <Image
                src={teamWaveLight}
                alt="Wave Light"
                layout="responsive"
                objectFit="contain"
                draggable={false}
              />
            </div>
          </>
        ) : (
          <>
            <div className="max-lg:hidden block">
              <Image
                src={teamWaveDark}
                alt="Wave Light"
                layout="responsive"
                objectFit="contain"
                draggable={false}
              />
            </div>
            <div className="block lg:hidden relative top-[50%]">
              <Image
                src={teamWaveDark}
                alt="Wave Light"
                layout="responsive"
                objectFit="contain"
                draggable={false}
              />
            </div>
          </>
        )}
      </div>
      <div className="relative z-8  pt-10 md:pt-20 flex flex-col">
        <div className="flex flex-col">
          <p className="text-xl md:text-2xl text-center font-bold pb-4 text-text mt-10 sm:mt-0">
            Committee Members
          </p>
          <div className="flex flex-col sm:flex-row justify-center text-center gap-8 xs:gap-10">
            <div>
              <p
                className={`text-xl font-semibold ${
                  theme === 'dark' ? `text-gold` : `text-brown`
                }`}
              >
                Operations
              </p>
              {operations_committee.map(({ link, name }) =>
                link ? (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={link}
                    key={name}
                  >
                    <p
                      key={name}
                      className={`text-text  ${
                        theme === 'dark'
                          ? `hover:text-goldHover`
                          : `hover:text-brownHover`
                      }`}
                    >
                      {name}
                    </p>
                  </a>
                ) : (
                  <p key={name} className="text-text">
                    {name}
                  </p>
                )
              )}
            </div>
            <div>
              <p
                className={`text-xl font-semibold ${
                  theme === 'dark' ? `text-gold` : `text-brown`
                }`}
              >
                Marketing
              </p>
              {marketing_committee.map(({ link, name }) =>
                link ? (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={link}
                    key={name}
                  >
                    <p
                      key={name}
                      className={`text-text  ${
                        theme === 'dark'
                          ? `hover:text-goldHover`
                          : `hover:text-brownHover`
                      }`}
                    >
                      {name}
                    </p>
                  </a>
                ) : (
                  <p key={name} className="text-text">
                    {name}
                  </p>
                )
              )}
            </div>
            <div>
              <p
                className={`text-xl font-semibold ${
                  theme === 'dark' ? `text-gold` : `text-brown`
                }`}
              >
                Software Engineers
              </p>
              {swe_committee.map(({ link, name }) =>
                link ? (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={link}
                    key={name}
                  >
                    <p
                      key={name}
                      className={`text-text  ${
                        theme === 'dark'
                          ? `hover:text-goldHover`
                          : `hover:text-brownHover`
                      }`}
                    >
                      {name}
                    </p>
                  </a>
                ) : (
                  <p key={name} className="text-text">
                    {name}
                  </p>
                )
              )}
            </div>
            <div>
              <p
                className={`text-xl font-semibold ${
                  theme === 'dark' ? `text-gold` : `text-brown`
                }`}
              >
                Sponsorship
              </p>
              {sponsorhip_committee.map(({ link, name }) =>
                link ? (
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href={link}
                    key={name}
                  >
                    <p
                      key={name}
                      className={`text-text  ${
                        theme === 'dark'
                          ? `hover:text-goldHover`
                          : `hover:text-brownHover`
                      }`}
                    >
                      {name}
                    </p>
                  </a>
                ) : (
                  <p key={name} className="text-text">
                    {name}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default team;

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

import sponsorUsButton from '../public/assets/sponsors/sponsorus_button.svg';
import becomeMentorButton from '../public/assets/sponsors/become_mentor_button.svg';
import becomeVolunteerButton from '../public/assets/sponsors/become_volunteer_button.svg';
import { SvgAttributes } from 'csstype';

interface SupportCardProps {
  // path to the front postcard svg
  front: string;
  // path to the back postcard svg
  back: string;
  // imported button svg
  button: SvgAttributes;
  // link for the button
  link: string;
}

interface SupportCardMobileProps {
  // path to the back postcard svg
  back: string;
  // imported button svg
  button: SvgAttributes;
  // link for the button
  link: string;
}

function SupportCardMobile({ back, button, link }: SupportCardMobileProps) {
  const bounceVariants = {
    initial: { x: [0, -5, 5, -5, 0], y: 0 },
    animate: {
      x: [0, -1, 2, -3, 0],
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
    <a
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative"
    >
      <Image
        src={'/assets/sponsors/' + back}
        width={528}
        height={305}
        objectFit="contain"
        priority={true}
        quality={1}
        className="rounded-md"
        alt=""
        draggable={false}
      />
      <motion.span
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.995 }}
        className="absolute right-2 -bottom-8"
        variants={bounceVariants as Variants}
        animate={bounce ? 'animate' : 'initial'}
      >
        {/* <a href={link}> */}
        <Image src={button} width={140} height={120} alt="" draggable={false} />
        {/* </a> */}
      </motion.span>
    </a>
  );
}

function SupportCard({ front, back, button, link }: SupportCardProps) {
  const bounceVariants = {
    initial: {
      y: 0
    },
    animate: {
      x: [0, -1, 2, -2, 0],
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
    <div className="flex h-60 w-full md:w-96 group perspective cursor-pointer">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full duration-700">
        <div className="absolute backface-hidden w-full">
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="flex text-center items-center justify-center text-white"
          >
            <Image
              src={'/assets/sponsors/' + front}
              width={528}
              height={305}
              objectFit="contain"
              priority={true}
              quality={1}
              className="rounded-md"
              alt=""
              draggable="false"
            />
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
              className="absolute right-2 -bottom-8"
              variants={bounceVariants as Variants}
              animate={bounce ? 'animate' : 'initial'}
            >
              {/* <a href={link}> */}
              <Image
                src={button}
                width={140}
                height={120}
                alt=""
                draggable="false"
              />
              {/* </a> */}
            </motion.span>
          </a>
        </div>
        <div className="absolute my-rotate-y-180 backface-hidden w-full">
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="text-center flex flex-col items-center justify-center"
          >
            <Image
              src={'/assets/sponsors/' + back}
              width={528}
              height={305}
              objectFit="contain"
              priority={true}
              quality={1}
              className="rounded-md"
              alt=""
              draggable="false"
            />
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
              className="absolute right-2 -bottom-8"
              variants={bounceVariants as Variants}
              animate={bounce ? 'animate' : 'initial'}
            >
              {/* <a href={link}> */}
              <Image
                src={button}
                width={140}
                height={120}
                alt=""
                draggable="false"
              />
              {/* </a> */}
            </motion.span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default function SupportCards() {
  const postcards = [
    {
      front: 'sponsor_us_front.svg',
      back: 'sponsor_us_back.svg',
      button: sponsorUsButton,
      link: '/sponsorship_packet.pdf'
    },
    {
      front: 'become_mentor_front.svg',
      back: 'become_mentor_back.svg',
      button: becomeMentorButton,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScxmD410p1xbI4z-WLYU_OkX87cNpA0NkVVkbrZOUjfwUL_wQ/viewform?usp=send_form'
    },
    {
      front: 'become_volunteer_front.svg',
      back: 'become_volunteer_back.svg',
      button: becomeVolunteerButton,
      link: 'https://docs.google.com/forms/d/e/1FAIpQLScxmD410p1xbI4z-WLYU_OkX87cNpA0NkVVkbrZOUjfwUL_wQ/viewform?usp=send_form'
    }
  ];
  return (
    <>
      <div className="hidden lg:flex flex-col lg:flex-row w-full md:space-x-10 rounded-md justify-center items-center">
        {postcards.map(({ front, back, button, link }) => (
          <SupportCard
            front={front}
            back={back}
            button={button}
            link={link}
            key={front}
          />
        ))}
      </div>
      <div className="flex lg:hidden flex-col gap-y-4 md:gap-y-7">
        {postcards.map(({ front, back, button, link }) => (
          <SupportCardMobile
            back={back}
            button={button}
            link={link}
            key={front}
          />
        ))}
      </div>
    </>
  );
}

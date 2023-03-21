import React from 'react';
import Image from 'next/image';
import dayOneFlag from '../public/assets/dayOneFlag.svg';
import dayTwoFlag from '../public/assets/dayTwoFlag.svg';
import reverseDayOneFlag from '../public/assets/reverseDayOneFlag.svg';
import reverseDayTwoFlag from '../public/assets/reverseDayTwoFlag.svg';
import balloonYellow from '../public/assets/balloonYellow.svg';
import balloonRed from '../public/assets/balloonRed.svg';
import balloonBlue from '../public/assets/balloonBlue.svg';
import balloonOrange from '../public/assets/balloonOrange.svg';
import balloonBlueTilt from '../public/assets/balloonBlueTilt.svg';
import cloud from '../public/assets/cloud.svg';
import { motion } from 'framer-motion';

const eventDesktopDay1 = [
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    rightTime: '1pm - 2pm',
    rightDescription: 'Check-In',
    rightPlace: 'WCH 205/205'
  },
  {
    leftTime: '1pm - 2pm',
    leftDescription: 'Teambuilding Activity',
    leftPlace: 'WCH 205/205',
    rightTime: '',
    rightDescription: '',
    rightPlace: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    rightTime: '1pm - 2pm',
    rightDescription: 'Intro to Unity',
    rightPlace: 'WCH 205/205'
  },
  {
    leftTime: '1pm - 2pm',
    leftDescription: 'Intro to Discord Bot',
    leftPlace: 'WCH 205/205',
    rightTime: '',
    rightDescription: '',
    rightPlace: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    rightTime: '1pm - 2pm',
    rightDescription: 'Intro to Git/Github',
    rightPlace: 'WCH 205/205'
  },
  {
    leftTime: '1pm - 2pm',
    leftDescription: 'Intro to GUI Programming',
    leftPlace: 'WCH 205/205',
    rightTime: '',
    rightDescription: ' ',
    rightPlace: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    rightTime: '1pm - 2pm',
    rightDescription: 'Resume Building',
    rightPlace: 'WCH 205/205'
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    rightTime: '1pm - 2pm',
    rightDescription: 'Intro to Git/Github',
    rightPlace: 'WCH 205/205'
  },
  {
    leftTime: '1pm - 2pm',
    leftDescription: 'Intro to GUI Programming',
    leftPlace: 'WCH 205/205',
    rightTime: '',
    rightDescription: ' ',
    rightPlace: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    rightTime: '1pm - 2pm',
    rightDescription: 'Intro to Git/Github',
    rightPlace: 'WCH 205/205'
  },
  {
    leftTime: '1pm - 2pm',
    leftDescription: 'Intro to GUI Programming',
    leftPlace: 'WCH 205/205',
    rightTime: '',
    rightDescription: '',
    rightPlace: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    rightTime: '1pm - 2pm',
    rightDescription: 'Hacking Check-In',
    rightPlace: 'WCH 205/205'
  },
  {
    leftTime: '1pm - 2pm',
    leftDescription: 'Teambuilding Activity',
    leftPlace: 'WCH 205/205',
    rightTime: '',
    rightDescription: '',
    rightPlace: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    rightTime: '1pm - 2pm',
    rightDescription: 'Intro to Unity',
    rightPlace: 'WCH 205/205'
  },
  {
    leftTime: '1pm - 2pm',
    leftDescription: 'Intro to Discord Bot',
    leftPlace: 'WCH 205/205',
    rightTime: '',
    rightDescription: '',
    rightPlace: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    rightTime: '1pm - 2pm',
    rightDescription: 'Intro to Git/Github',
    rightPlace: 'WCH 205/205'
  },
  {
    leftTime: '1pm - 2pm',
    leftDescription: 'Intro to GUI Programming',
    leftPlace: 'WCH 205/205',
    rightTime: '',
    rightDescription: '',
    rightPlace: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    rightTime: '1pm - 2pm',
    rightDescription: 'Resume Building',
    rightPlace: 'WCH 205/205'
  }
];

const eventsMobileDay1 = [
  {
    time: '1pm - 2pm',
    description: 'Check-In',
    place: 'WCH 205/205'
  },
  {
    time: '1pm - 2pm',
    description: 'Teambuilding Activity',
    place: 'WCH 205/205'
  },
  {
    time: '1pm - 2pm',
    description: 'Intro to Unity',
    place: 'WCH 205/205'
  },
  {
    time: '1pm - 2pm',
    description: 'Intro to Discord Bot',
    place: 'WCH 205/205'
  },
  {
    time: '3pm - 4pm',
    description: 'Intro to Git/Github',
    place: 'WCH 205/205'
  },
  {
    time: '3pm - 4pm',
    description: 'Intro to GUI Programming',
    place: 'WCH 205/205'
  },
  {
    time: '3pm - 4pm',
    description: 'Intro to UI/UX Design',
    place: 'WCH 205/205'
  },
  {
    time: '3pm - 4pm',
    description: 'Resume Building',
    place: 'WCH 205/205'
  },
  {
    time: '8pm - 9pm',
    description: 'Intro to UI/UX Design',
    place: 'WCH 205/205'
  },
  {
    time: '8pm-9pm',
    description: 'Lunch Distribution',
    place: 'WCH 205/205'
  },
  {
    time: '8pm - 9pm',
    description: 'Dinner Distribution',
    place: 'WCH 205/205'
  },
  {
    time: '1pm - 2pm',
    description: 'Teambuilding Activity',
    place: 'WCH 205/205'
  },
  {
    time: '1pm - 2pm',
    description: 'Intro to Unity',
    place: 'WCH 205/205'
  },
  {
    time: '1pm - 2pm',
    description: 'Intro to Discord Bot',
    place: 'WCH 205/205'
  },
  {
    time: '3pm - 4pm',
    description: 'Intro to Git/Github',
    place: 'WCH 205/205'
  },
  {
    time: '3pm - 4pm',
    description: 'Intro to GUI Programming',
    place: 'WCH 205/205'
  },
  {
    time: '3pm - 4pm',
    description: 'Intro to UI/UX Design',
    place: 'WCH 205/205'
  },
  {
    time: '3pm - 4pm',
    description: 'Resume Building',
    place: 'WCH 205/205'
  },
  {
    time: '8pm - 9pm',
    description: 'Intro to UI/UX Design',
    place: 'WCH 205/205'
  },
  {
    time: '8pm-9pm',
    description: 'Lunch Distribution',
    place: 'WCH 205/205'
  },
  {
    time: '8pm - 9pm',
    description: 'Dinner Distribution',
    place: 'WCH 205/205'
  }
];

export const EventMobile = ({ time, description, color, place }) => {
  return (
    <>
      <span
        className={`rounded-full border-4 ${color} w-5 h-5 relative right-2`}
      ></span>
      <div className="flex">
        <div className={`border-r-4 ${color}`}></div>
        <div className="hidden xs:inline w-full relative bottom-[55%] pl-10 py-6 h-[90px] items-center justify-evenly">
          <div className="flex">
            <p className="text-xl text-left font-semibold w-full">
              {description}
            </p>
            <div className="flex flex-col w-full">
              <p className="text-base text-center font-semibold w-full text-brown">
                {time}
              </p>
              <p className="text-base text-center font-medium w-full text-brown">
                {place}
              </p>
            </div>
          </div>
        </div>
        <div className="xs:hidden relative bottom-[55%] pl-10 py-6 h-[90px] flex flex-col items-start">
          <p className="text-xl text-left font-semibold">{description}</p>
          <p className="text-md text-left text-brown">
            {time} @ {place}
          </p>
        </div>
      </div>
    </>
  );
};

export const Mobile = () => {
  return (
    <div className="flex flex-col items-center justify-end w-full">
      <div className="flex flex-col">
        <div className="flex">
          <div className="border-r-4 border-[#D56774]"></div>
          <div className="w-56 relative pb-5 bottom-4">
            <Image src={reverseDayOneFlag} alt="flag" />
          </div>
        </div>
        {/* Mobile Day 1 */}
        {eventsMobileDay1.map(({ time, description, place }) => (
          <EventMobile
            key={time}
            time={time}
            description={description}
            place={place}
            color="border-[#D56774]"
          />
        ))}
        <span className="mr-1 self-start bg-gradient-to-b from-[#D56774] pb-14 to-[#E7AA36] pr-1 flex"></span>
        <div className="flex">
          <div className="border-r-4 border-[#E7AA36]"></div>
          <div className="w-56 relative pb-5 bottom-4">
            <Image src={reverseDayTwoFlag} alt="flag" />
          </div>
        </div>
        {/* Mobile Day 2 */}
        {eventsMobileDay1.map(({ time, description, place }) => (
          <EventMobile
            key={time}
            time={time}
            place={place}
            description={description}
            color="border-[#E7AA36]"
          />
        ))}
        <span className="mr-1 self-start  bg-gradient-to-b from-[#E7AA36] pb-10 to-transparent pr-1 flex"></span>
      </div>
    </div>
  );
};

export const EventDesktop = ({
  leftTime,
  leftDescription,
  leftPlace,
  rightTime,
  rightDescription,
  rightPlace,
  borderColor
}) => {
  return (
    <>
      <span
        className={`mr-1 rounded-full border-4 ${borderColor} w-5 h-8 flex justify-center items-center`}
      ></span>

      {/* flag left side */}
      <div className="flex">
        <div
          className={`w-56 h-24 border-r-4 ${borderColor} pr-8 flex flex-col items-end`}
        >
          {leftTime === '' ? (
            ''
          ) : (
            <div className="relative bottom-7">
              <p className="text-xl text-right font-semibold w-full">
                {leftDescription}
              </p>
              <p className="text-base text-right text-brown w-full">
                {leftTime} @ {leftPlace}
              </p>
            </div>
          )}
        </div>

        {/* flag right side */}
        <div className="w-56 h-24 pl-8 flex flex-col items-start">
          {rightTime === '' ? (
            ''
          ) : (
            <div className="relative bottom-7">
              <p className="text-xl text-left font-semibold w-full">
                {rightDescription}
              </p>
              <p className="text-base text-left text-brown w-full">
                {rightTime} @ {rightPlace}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export const DesktopShedule = ({ image, borderColor, fromColor, day }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-start">
        <div
          className={`relative w-1/2 mb-0 flex flex-col items-start justify-end border-r-4 ${borderColor}`}
        >
          <div className="relative pb-5 bottom-4">
            <Image src={image} alt="flag" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-5/6 ">
        {day.map(
          ({
            leftTime,
            leftDescription,
            leftPlace,
            rightTime,
            rightDescription,
            rightPlace
          }) => (
            <EventDesktop
              key={leftTime}
              leftTime={leftTime}
              leftDescription={leftDescription}
              leftPlace={leftPlace}
              rightTime={rightTime}
              rightDescription={rightDescription}
              rightPlace={rightPlace}
              borderColor={borderColor}
            />
          )
        )}
        <span
          className={`mr-1 rounded-full border-4 ${borderColor} w-5 h-8 flex justify-center items-center`}
        ></span>
        <span
          className={`mr-1 h-[20%] bg-gradient-to-b ${fromColor} pb-10 pr-1 flex`}
        ></span>
      </div>
    </div>
  );
};

export const Desktop = () => {
  return (
    <>
      <div className="flex w-full justify-between">
        <DesktopShedule
          image={dayOneFlag}
          day={eventDesktopDay1}
          borderColor="border-red"
          fromColor="from-red"
        />
        <DesktopShedule
          image={dayTwoFlag}
          day={eventDesktopDay1}
          borderColor="border-gold"
          fromColor="from-gold"
        />
      </div>
    </>
  );
};

export const Assets = () => {
  return (
    <>
      {/* yellow balloon top left */}{' '}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute  -z-1 w-1/12 left-0 sm:left-10 md:-left-0 xl:-left-48 top-96 sm:top-28"
      >
        <Image src={balloonYellow} alt="balloon" />
      </motion.div>
      {/* red balloon bottom left */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute -z-1 w-1/12 right-14 sm:left-10 md:-left-0 xl:-left-28 bottom-[25.5%] sm:bottom-24"
      >
        <Image src={balloonRed} alt="balloon" />
      </motion.div>
      {/* blue balloon middle */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute -z-1 w-1/12 left-28 sm:left-10 lg:left-[45%] top-[49%]"
      >
        <Image src={balloonBlueTilt} alt="balloon" />
      </motion.div>
      {/* orange balloon top right */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute -z-1 w-1/12 right-0 sm:right-10 lg:right-0 top-0"
      >
        <Image src={balloonOrange} alt="balloon" />
      </motion.div>
      {/* blue balloon bottom right */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute -z-1 w-12 right-0 sm:right-10 lg:right-0 bottom-0"
      >
        <Image src={balloonBlue} alt="balloon" />
      </motion.div>
      {/* Yellow balloon middle right */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute -z-1 w-[5%] right-0 sm:right-0 md:right-10 xl:-right-16 top-[35%] lg:top-[40%]"
      >
        <Image src={balloonYellow} alt="balloon" />
      </motion.div>
      {/* cloud top right */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute -z-12 w-20 xs:w-36 right-10 sm:right-0 md:right-10 xl:-right-16 top-[49%] lg:top-[17%]"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* cloud middle*/}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute -z-12 w-12 xs:w-16 md:w-32 right-20 sm:right-0 md:right-10 xl:-right-16 top-[23.5%] md:top-[20%] lg:top-[68.5%]"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* cloud bottom right */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute -z-12 w-8 xs:w-20 right-0 sm:right-0 md:right-10 xl:-right-16 bottom-[21%] xs:bottom-[16.5%] lg:bottom-36"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* cloud top left */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute -z-12 w-12 xs:w-1/12 right-8 xs:left-0 xl:-left-28 top-40 sm:top-[24%]"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
      {/* cloud bottom left */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute -z-12 w-12 xs:w-16 left-0 xs:left-10 xl:-left-36 top-[65%] sm:top-[61%]"
      >
        <Image src={cloud} alt="cloud" />
      </motion.div>
    </>
  );
};

export const MasterSchedule = () => {
  return (
    <div className="relative flex w-full my-10 px-10">
      <div className="w-full flex lg:hidden justify-center">
        <Mobile />
      </div>
      <div className="hidden lg:inline w-full">
        <Desktop />
      </div>
      <Assets />
    </div>
  );
};

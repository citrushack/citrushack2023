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
import cloud from '../public/assets/cloud.svg';
import cloudDark from '../public/assets/cloudDark.svg';
import bird1 from '@/public/assets/bird1.svg';
import star from '@/public/assets/star.svg';

import { useTheme } from 'next-themes';

import { motion } from 'framer-motion';

const eventDesktopDay1 = [
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '7:00 AM',
    rightDescription: 'Check-In',
    rightPlace: '@ MSE 116',
    rightEventType: ''
  },
  {
    leftTime: '8:00 AM',
    leftDescription: 'Opening Ceremony',
    leftPlace: '@ MSE 116',
    leftEventType: '',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  },
  {
    leftTime: '9:00 AM',
    leftDescription: 'Hacking Begins',
    leftPlace: '',
    leftEventType: '',
    rightTime: '9:00 AM',
    rightDescription: 'Team Building',
    rightPlace: '@ MSE 116',
    rightEventType: 'Workshop'
  },
  {
    leftTime: '10:00 AM',
    leftDescription: 'Giddy Up w/ Git',
    leftPlace: '@ WCH 205/206',
    leftEventType: 'Workshop',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '11:00 AM',
    rightDescription: 'Rock your Web Portfolio w/ React',
    rightPlace: '@ WCH 205/206',
    rightEventType: 'Workshop'
  },
  {
    leftTime: '12:00 PM',
    leftDescription: 'Understanding Unity',
    leftPlace: '@ WCH 205/206',
    leftEventType: 'Workshop',
    rightTime: '12:00 PM',
    rightDescription: 'Strongest Bridge',
    rightPlace: '@ Bourns A265',
    rightEventType: 'Activity'
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '1:00 PM',
    rightDescription: 'Lunch',
    rightPlace: '@ Outside Bytes',
    rightEventType: ''
  },
  {
    leftTime: '2:00 PM',
    leftDescription: 'Level Up your LinkedIn',
    leftPlace: '@ WCH 205/206',
    leftEventType: 'Workshop',
    rightTime: '2:00 PM',
    rightDescription: 'Tallest Tower Stacking',
    rightPlace: '@ Bourns A265',
    rightEventType: 'Activity'
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '3:00 PM',
    rightDescription: `Prof. Allan's App Dev Masterclass`,
    rightPlace: '@ WCH 205/206',
    rightEventType: 'Workshop'
  },
  {
    leftTime: '4:00 PM',
    leftDescription: `Can't Spell UI/UX without U & I <3`,
    leftPlace: '@ WCH 205/206',
    leftEventType: 'Workshop',
    rightTime: '4:00 PM',
    rightDescription: 'Skribblio',
    rightPlace: '@ Bourns A265',
    rightEventType: 'Activity'
  },
  {
    leftTime: '5:00 PM',
    leftDescription: 'TypeRacer',
    leftPlace: '@ Bourns A265',
    leftEventType: 'Activity',
    rightTime: '5:00 PM',
    rightDescription: 'Arm Up your API: Security & Testing',
    rightPlace: '@ WCH 205/206',
    rightEventType: ''
  },
  {
    leftTime: '6:00 PM',
    leftDescription: 'Revamp your Resume',
    leftPlace: '@ WCH 205/206',
    leftEventType: 'Workshop',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  },
  {
    leftTime: '7:00 PM',
    leftDescription: 'Digital Twin Performance',
    leftPlace: '@ WCH Courtyard',
    leftEventType: '',
    rightTime: '7:00 PM',
    rightDescription: 'Dinner',
    rightPlace: '@ Outside Bytes',
    rightEventType: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: 'Workshop',
    rightTime: '7:30 PM',
    rightDescription: 'Group Photo',
    rightPlace: '@ WCH Courtyard',
    rightEventType: ''
  },
  {
    leftTime: '8:00 PM',
    leftDescription: 'MLH: Capture the Flag',
    leftPlace: '@ WCH 205/206',
    leftEventType: 'Workshop',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  }
];

const eventDesktopDay2 = [
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '1:00 AM',
    rightDescription: 'JackBox',
    rightPlace: '@ Bourns A265',
    rightEventType: 'Activity'
  },
  {
    leftTime: '3:00 AM',
    leftDescription: 'Movie Marathon',
    leftPlace: '@ Bourns A265',
    leftEventType: 'Activity',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '9:00 AM',
    rightDescription: 'Hacking Ends',
    rightPlace: '',
    rightEventType: ''
  },
  {
    leftTime: '9:15 AM',
    leftDescription: 'Breakfast',
    leftPlace: '@ Outside Bytes',
    leftEventType: '',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '10:00 AM',
    rightDescription: 'Judging Starts',
    rightPlace: '@ WCH Courtyard',
    rightEventType: ''
  },
  {
    leftTime: '1:30 PM',
    leftDescription: 'Closing Ceremony',
    leftPlace: '@ MSE 116',
    leftEventType: '',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  },
  {
    leftTime: '',
    leftDescription: '',
    leftPlace: '',
    leftEventType: '',
    rightTime: '',
    rightDescription: '',
    rightPlace: '',
    rightEventType: ''
  }
];

const eventsMobileDay1 = [
  {
    time: '7:00 AM',
    description: 'Check-In',
    place: '@ MSE 116'
  },
  {
    time: '8:00 AM',
    description: 'Opening Ceremony',
    place: '@ MSE 116'
  },
  {
    time: '9:00 AM',
    description: 'Hacking Begins',
    place: '',
    type: ''
  },
  {
    time: '9:00 AM',
    description: 'Team Building',
    place: '@ MSE 116',
    type: 'Workshop'
  },
  {
    time: '10:00 AM',
    description: 'Giddy Up w/ Git',
    place: '@ WCH 205/206',
    type: 'Workshop'
  },
  {
    time: '11:00 AM',
    description: 'Rock Your Web Portfolio w/ React',
    place: '@ WCH 205/206',
    type: 'Workshop'
  },
  {
    time: '12:00 PM',
    description: 'Understanding Unity',
    place: '@ WCH 205/206',
    type: 'Workshop'
  },
  {
    time: '12:00 PM',
    description: 'Strongest Bridge',
    place: '@ Bourns A265',
    type: 'Activity'
  },
  {
    time: '1:00 PM',
    description: 'Lunch',
    place: '@ Outside Bytes',
    type: ''
  },
  {
    time: '2:00 PM',
    description: 'Level Up Your LinkedIn',
    place: '@ WCH 205/206',
    type: 'Workshop'
  },
  {
    time: '2:00 PM',
    description: 'Tallest Tower Stacking',
    place: '@ Bourns A265',
    type: 'Activity'
  },
  {
    time: '3:00 PM',
    description: `Prof. Allan's App Dev Masterclass`,
    place: '@ WCH 205/206',
    type: 'Workshop'
  },
  {
    time: '4:00 PM',
    description: `Can't Spell UI/UX without U & I <3`,
    place: '@ WCH 205/206',
    type: 'Workshop'
  },
  {
    time: '4:00 PM',
    description: 'Skribblio',
    place: '@ Bourns A265',
    type: 'Activity'
  },
  {
    time: '5:00 PM',
    description: 'Arm Up your API: Security & Testing',
    place: '@ WCH 205/206',
    type: 'Workshop'
  },
  {
    time: '5:00 PM',
    description: 'TypeRacer',
    place: '@ Bourns A265',
    type: 'Activity'
  },
  {
    time: '6:00 PM',
    description: 'Revamp Your Resume',
    place: '@ WCH 205/206',
    type: 'Workshop'
  },
  {
    time: '7:00 PM',
    description: 'Dinner',
    place: '@ Outside Bytes',
    type: ''
  },
  {
    time: '7:00 PM',
    description: 'Digital Twin Performance',
    place: '@ WCH Courtyard',
    type: ''
  },
  {
    time: '7:30 PM',
    description: 'Group Photo',
    place: '@ WCH Courtyard',
    type: ''
  },
  {
    time: '8:00 PM',
    description: 'MLH: Capture the Flag',
    place: '@ WCH 205/206',
    type: 'Workshop'
  }
];
const eventsMobileDay2 = [
  {
    time: '1:00 AM',
    description: 'JackBox',
    place: '@ Bourns A265',
    type: 'Activity'
  },
  {
    time: '3:00 AM',
    description: 'Movie Marathon',
    place: '@ Bourns A265',
    type: 'Activity'
  },
  {
    time: '9:00 AM',
    description: 'Hacking Ends',
    place: '',
    type: ''
  },
  {
    time: '9:15 AM',
    description: 'Breakfast',
    place: '@ Outside Bytes',
    type: ''
  },
  {
    time: '10:00 AM',
    description: 'Judging Starts',
    place: '@ WCH Courtyard',
    type: ''
  },
  {
    time: '1:30 PM',
    description: 'Closing Ceremony',
    place: '@ MSE 116',
    type: ''
  }
];

export const EventMobile = ({ time, description, color, place, type }) => {
  const { theme } = useTheme();

  return (
    <>
      <span
        className={`rounded-full border-4 ${color} w-5 h-5 relative right-2`}
      ></span>
      <div className="flex py-1">
        <div className={`border-r-4 ${color}  -my-1`}></div>
        <div className="hidden xs:inline w-full relative bottom-[55%] pl-10 py-6 h-[90px] items-center justify-evenly">
          <div className="flex">
            <p className="text-xl text-left font-semibold w-full">
              {description}
            </p>
            <div className="flex flex-col w-full">
              <p
                className={`text-base text-center font-semibold w-full ${
                  theme === 'dark' ? `text-goldHover` : `text-brown`
                }`}
              >
                {time}
              </p>
              <p
                className={`text-base text-center font-medium w-full ${
                  theme === 'dark' ? `text-goldHover` : `text-brown`
                }`}
              >
                {place}
              </p>
              <p
                className={`text-md text-center ${
                  theme === 'dark' ? `text-goldHover` : `text-brown`
                }`}
              >
                {type}
              </p>
            </div>
          </div>
        </div>
        <div className="xs:hidden relative bottom-[60%] pl-10 py-6 h-[90px] flex flex-col items-start">
          <p className="text-xl text-left font-semibold">{description}</p>
          <p
            className={`text-md text-left ${
              theme === 'dark' ? `text-goldHover` : `text-brown`
            }`}
          >
            {time} {place}
          </p>
          <p
            className={`max-[375px]:hidden  text-md text-left ${
              theme === 'dark' ? `text-goldHover` : `text-brown`
            }`}
          >
            {type}
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
            <Image src={reverseDayOneFlag} alt="flag" draggable="false" />
          </div>
        </div>
        {/* Mobile Day 1 */}
        {eventsMobileDay1.map(({ time, description, place, type }) => (
          <EventMobile
            key={time}
            time={time}
            description={description}
            place={place}
            type={type}
            color="border-[#D56774]"
          />
        ))}
        <span className="mr-1 self-start bg-gradient-to-b from-[#D56774] pb-14 to-gold pr-1 flex"></span>
        <div className="flex">
          <div className="border-r-4 border-gold"></div>
          <div className="w-56 relative pb-5 bottom-4">
            <Image src={reverseDayTwoFlag} alt="flag" draggable="false" />
          </div>
        </div>
        {/* Mobile Day 2 */}
        {eventsMobileDay2.map(({ time, description, place, type }) => (
          <EventMobile
            key={time}
            time={time}
            place={place}
            description={description}
            type={type}
            color="border-gold"
          />
        ))}
        <span className="mr-1 self-start  bg-gradient-to-b from-gold pb-10 to-transparent pr-1 flex"></span>
      </div>
    </div>
  );
};

export const EventDesktop = ({
  leftTime,
  leftDescription,
  leftPlace,
  leftEventType,
  rightTime,
  rightDescription,
  rightPlace,
  rightEventType,
  borderColor
}) => {
  const { theme } = useTheme();
  return (
    <>
      <span
        className={`mr-1 rounded-full border-4 ${borderColor} w-5 h-8 flex justify-center items-center`}
      ></span>

      {/* flag left side */}
      <div className="flex">
        <div
          className={`w-[238px] h-28 border-r-4 ${borderColor} pr-8 flex flex-col items-end`}
        >
          {leftTime === '' ? (
            ''
          ) : (
            <div className="relative bottom-7">
              <p className="text-xl text-right font-semibold w-full text-text">
                {leftDescription}
              </p>
              <p
                className={`text-base text-right w-full ${
                  theme === 'dark' ? `text-goldHover` : `text-brown`
                }`}
              >
                {leftTime} {leftPlace}
              </p>
              <p
                className={`text-base text-right w-full ${
                  theme === 'dark' ? `text-goldHover` : `text-brown`
                }`}
              >
                {leftEventType}
              </p>
            </div>
          )}
        </div>

        {/* flag right side */}
        <div className="w-[238px] h-28 pl-8 flex flex-col items-start">
          {rightTime === '' ? (
            ''
          ) : (
            <div className="relative bottom-7">
              <p className="text-xl text-left font-semibold w-full text-text">
                {rightDescription}
              </p>
              <p
                className={`text-base text-left w-full ${
                  theme === 'dark' ? `text-goldHover` : `text-brown`
                }`}
              >
                {rightTime} {rightPlace}
              </p>
              <p
                className={`text-base text-left w-full ${
                  theme === 'dark' ? `text-goldHover` : `text-brown`
                }`}
              >
                {rightEventType}
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
            <Image src={image} alt="flag" draggable="false" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-5/6 ">
        {day.map(
          ({
            leftTime,
            leftDescription,
            leftPlace,
            leftEventType,
            rightTime,
            rightDescription,
            rightPlace,
            rightEventType
          }) => (
            <EventDesktop
              key={leftTime}
              leftTime={leftTime}
              leftDescription={leftDescription}
              leftPlace={leftPlace}
              leftEventType={leftEventType}
              rightTime={rightTime}
              rightDescription={rightDescription}
              rightPlace={rightPlace}
              borderColor={borderColor}
              rightEventType={rightEventType}
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
          borderColor="border-[#D56774]"
          fromColor="from-[#D56774]"
        />
        <DesktopShedule
          image={dayTwoFlag}
          day={eventDesktopDay2}
          borderColor="border-gold"
          fromColor="from-gold"
        />
      </div>
    </>
  );
};

export const Assets = () => {
  const { theme } = useTheme();

  return (
    <>
      {/* yellow balloon top left */}{' '}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute  z-10 w-1/12 left-0 sm:left-10 md:-left-0 xl:-left-48 top-96 sm:top-28"
      >
        <Image src={balloonYellow} alt="balloon" draggable="false" />
      </motion.div>
      {/* red balloon bottom left */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute z-10 w-1/12 right-0 xs:right-14 sm:left-10 md:-left-0 xl:-left-28 bottom-[25.5%] sm:bottom-24"
      >
        <Image src={balloonRed} alt="balloon" draggable="false" />
      </motion.div>
      {/* blue balloon middle */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute z-10 w-1/12 left-0 xs:left-28 sm:left-10 lg:left-[45%] top-[49%]"
      >
        {theme === 'light' ? (
          <Image src={bird1} alt="bird" draggable="false" />
        ) : (
          <Image src={star} alt="star" draggable="false" />
        )}
      </motion.div>
      {/* orange balloon top right */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute z-10 w-1/12 right-0 sm:right-10 lg:right-0 top-0"
      >
        {theme === 'light' ? (
          <Image src={bird1} alt="bird" draggable="false" />
        ) : (
          <Image src={star} alt="star" draggable="false" />
        )}
      </motion.div>
      {/* blue balloon bottom right */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute z-10 w-12 right-0 sm:right-10 lg:right-0 bottom-0"
      >
        <Image src={balloonBlue} alt="balloon" draggable="false" />
      </motion.div>
      {/* Yellow balloon middle right */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3
        }}
        className="absolute z-10 w-[5%] right-0 sm:right-0 md:right-10 xl:-right-16 top-[35%] lg:top-[40%]"
      >
        <Image src={balloonOrange} alt="balloon" draggable="false" />
      </motion.div>
      {/* cloud top right -----*/}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-10 w-20 xs:w-36 right-10 sm:right-0 md:right-10 xl:-right-16 top-[49%] lg:top-[17%] max-xs:hidden"
      >
        {theme === 'light' ? (
          <Image src={cloud} alt="cloud" draggable="false" />
        ) : (
          <Image src={cloudDark} alt="cloud" draggable="false" />
        )}
      </motion.div>
      {/* cloud middle*/}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-10 w-12 xs:w-16 md:w-32 right-0 md:right-10 xl:-right-16 top-[23.5%] md:top-[20%] lg:top-[68.5%]"
      >
        {theme === 'light' ? (
          <Image src={bird1} alt="bird" draggable="false" />
        ) : (
          <Image src={star} alt="star" draggable="false" />
        )}
      </motion.div>
      {/* cloud bottom right */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-10 w-8 xs:w-20 right-0 sm:right-0 md:right-10 xl:-right-16 bottom-[21%] xs:bottom-[16.5%] lg:bottom-36 max-xs:hidden"
      >
        {theme === 'light' ? (
          <Image src={cloud} alt="cloud" draggable="false" />
        ) : (
          <Image src={cloudDark} alt="cloud" draggable="false" />
        )}
      </motion.div>
      {/* cloud top left */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-10 w-12 max-sm:hidden xs:w-1/12 right-8 xs:left-0 xl:-left-28 top-40 sm:top-[24%]"
      >
        {theme === 'light' ? (
          <Image src={bird1} alt="bird" draggable="false" />
        ) : (
          <Image src={star} alt="star" draggable="false" />
        )}
      </motion.div>
      {/* cloud bottom left */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5
        }}
        className="absolute z-10 w-12 xs:w-16 left-0 xs:left-10 xl:-left-36 top-[64.5%] sm:top-[61%] max-xs:hidden"
      >
        {theme === 'light' ? (
          <Image src={cloud} alt="cloud" draggable="false" />
        ) : (
          <Image src={cloudDark} alt="cloud" draggable="false" />
        )}
      </motion.div>
    </>
  );
};

export const MasterSchedule = () => {
  return (
    <div className="relative flex w-full my-10 px-10">
      <div className="relative z-30 w-full flex lg:hidden justify-center">
        <Mobile />
      </div>
      <div className="relative z-30 hidden lg:inline w-full">
        <Desktop />
      </div>
      <Assets />
    </div>
  );
};

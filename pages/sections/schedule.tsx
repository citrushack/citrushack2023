import { MasterSchedule } from '@/components/Schedule';
import React from 'react';
import scheduleWave from '@/public/assets/waves/scheduleWave.svg';
import scheduleWave2 from '@/public/assets/waves/scheduleWave2.svg';
import scheduleWave3 from '@/public/assets/waves/scheduleWave3.svg';
import scheduleWaveDark from '@/public/assets/waves/scheduleWaveDark.svg';
import scheduleWave2Dark from '@/public/assets/waves/scheduleWave2Dark.svg';
import scheduleWave3Dark from '@/public/assets/waves/scheduleWave3Dark.svg';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Schedule() {
  const { theme } = useTheme();

  return (
    <section className="flex flex-col w-full h-full my-8 lg:my-6 max-w-[72rem] justify-center items-center">
      <p className="relative z-10 text-center font-black text-5xl md:text-7xl text-text">
        Schedule
      </p>
      <p className="relative z-20 text-lg md:text-2xl px-4 text-center italic font-semibold text-highlight mb-0 md:mb-5 text-text">
        PST (Pacific Standard Time)
      </p>
      <MasterSchedule />
      <div className="absolute w-screen h-screen z-0 right-0">
        {theme === 'light' ? (
          <>
            <div className="max-lg:hidden block">
              <Image
                src={scheduleWave}
                alt="Wave Light"
                layout="responsive"
                objectFit="contain"
                draggable={false}
              />
            </div>
            <div className="block lg:hidden h-full">
              <div className="relative bottom-[50%]">
                <Image
                  src={scheduleWave3}
                  alt="Wave Light"
                  layout="responsive"
                  objectFit="contain"
                  draggable={false}
                />
              </div>
              <div className="relative -bottom-[100%]">
                <Image
                  src={scheduleWave2}
                  alt="Wave Light"
                  layout="responsive"
                  objectFit="contain"
                  draggable={false}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="max-lg:hidden block">
              <Image
                src={scheduleWaveDark}
                alt="Wave Light"
                layout="responsive"
                objectFit="contain"
                draggable={false}
              />
            </div>
            <div className="block lg:hidden h-full">
              <div className="relative bottom-[50%]">
                <Image
                  src={scheduleWave3Dark}
                  alt="Wave Light"
                  layout="responsive"
                  objectFit="contain"
                  draggable={false}
                />
              </div>
              <div className="relative -bottom-[100%]">
                <Image
                  src={scheduleWave2Dark}
                  alt="Wave Light"
                  layout="responsive"
                  objectFit="contain"
                  draggable={false}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

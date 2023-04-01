import { MasterSchedule } from '@/components/Schedule';
import React from 'react';
import scheduleWave from '@/public/assets/waves/scheduleWave.svg';
import scheduleWaveDark from '@/public/assets/waves/scheduleWaveDark.svg';
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
          <Image
            src={scheduleWave}
            alt="Wave Light"
            draggable="false"
            layout="responsive"
            objectFit="contain"
          />
        ) : (
          <Image
            src={scheduleWaveDark}
            alt="Wave Dark"
            draggable="false"
            layout="responsive"
            objectFit="contain"
          />
        )}
      </div>
    </section>
  );
}

import SupportCards from '@/components/SupportCards';
import SupportWaveLight from '@/public/assets/waves/supportWave.svg';
import SupportWaveDark from '@/public/assets/waves/supportWaveDark.svg';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export default function Support() {
  const { theme } = useTheme();
  return (
    <section className="relative z-0 flex flex-col w-full my-10 lg:mt-6 md:pb-0 px-4">
      <div className="relative z-20 flex flex-col justify-center items-center mb-10 md:mb-0">
        <h1 className="text-center font-black text-5xl md:text-7xl text-text">
          Get Involved
        </h1>
        <p className="text-center text-text text-lg md:text-2xl font-semibold mb-10 xs:mb-12 sm:w-3/4">
          Not interested in hacking but still want to participate? Great! We
          would love to have you on board. Fill out the forms below if
          you&apos;d like to help hackers throughout the day!
        </p>
        <SupportCards />
      </div>
      <div className="absolute w-screen h-screen -z-0 right-0 lg:-top-20 xl:-top-44 ">
        {theme === 'light' ? (
          <Image
            src={SupportWaveLight}
            alt="Wave Light"
            layout="responsive"
            objectFit="contain"
            draggable="false"
          />
        ) : (
          <Image
            src={SupportWaveDark}
            alt="Wave Dark"
            layout="responsive"
            objectFit="contain"
            draggable="false"
          />
        )}
      </div>
    </section>
  );
}

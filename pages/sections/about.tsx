import Image from 'next/image';
import Suitcases from '../../public/assets/suitcases.svg';
import Postcard from '../../public/assets/postcard.svg';

export default function About() {
  return (
    <section className="flex flex-col w-full h-full my-12 max-h-[60rem] justify-center items-center">
      <div className="flex justfify-end items-end translate-x-18 left-20 mb-10 lg:mb-20">
        <div className="w-screen sm:translate-x-12 lg:translate-x-20 xl:translate-x-28 px-4">
          <Image src={Postcard} alt="Postcard" />
        </div>
        <div className="w-4/12 -translate-x-12 hidden sm:block">
          <Image src={Suitcases} alt="Suitcases" />
        </div>
      </div>
    </section>
  );
}

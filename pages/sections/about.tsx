import Image from 'next/image';
import AboutUs from '../../public/assets/aboutUs.svg';
import Postcard from '../../public/assets/postcard.svg';
import React from 'react';

export default function About() {
  return (
    <section className="flex flex-col w-full h-full my-8 lg:my-14 max-h-[60rem] justify-center items-center">
      <div className="w-5/6 xl:w-2/3 hidden mb-12 lg:mb-0 sm:inline">
        <Image src={AboutUs} alt="AboutUs" />
      </div>
      <div className="w-full sm:w-5/6 sm:hidden mb-12">
        <Image src={Postcard} alt="Postcard" />
      </div>
    </section>
  );
}

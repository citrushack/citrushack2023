import { CarouselSponsor } from '@/components/Sponsors';

export default function Sponsors() {
  return (
    <section className="flex flex-col w-full h-full max-w-[60rem] my-12 lg:my-0 justify-center items-center">
      <h1 className="text-center text-7xl font-black w-391 h-109 not-italic items-center mt-6">Our Sponsors</h1>
      <p className="w-1050 h-58 font-weight-400 text-2xl leading-7 text-center font-normal pt-10 pb-5">
        Thank you to all of those who made this hackathon possible!
      </p>
      <CarouselSponsor />
    </section>
  );
}

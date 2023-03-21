import { CarouselSponsor } from '@/components/Sponsors';

export default function Sponsors() {
  return (
    <section className="flex flex-col w-full h-full max-w-[60rem] my-12 lg:my-0 justify-center items-center">
      <h1 className="text-center">Our Sponsors</h1>
      <p className="mb-12 text-center">
        Thank you to all of those who made this hackathon possible!
      </p>
      <CarouselSponsor />
    </section>
  );
}

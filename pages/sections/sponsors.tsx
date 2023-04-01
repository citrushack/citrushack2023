import { SponsorsGrid } from '@/components/SponsorGrid';

export default function Sponsors() {
  return (
    <section className="relative z-0 flex flex-col w-full h-full max-w-[60rem] md:mt-10 justify-center items-center">
      <h1 className="text-center text-5xl md:text-7xl font-black text-text">
        Our Sponsors
      </h1>
      <p className="text-center text-lg md:text-2xl font-semibold text-text xs:w-3/4">
        Thank you to all of those who made this hackathon possible!
      </p>
      <SponsorsGrid />
    </section>
  );
}

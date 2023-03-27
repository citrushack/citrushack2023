import { CarouselSponsor } from '@/components/Sponsors';

export default function Support() {
  return (
    <section className="flex flex-col w-full h-full max-w-[60rem] my-12 lg:mt-0 justify-center items-center">
      <h1 className="text-center font-black text-5xl md:text-7xl">
        Get Involved
      </h1>
      <p className="mb-10 text-center">
        Not interested in hacking but still want to participate? Great! We would
        love to have you on board. Fill out the forms below if you&apos;d like
        to help hackers throughout the day!
      </p>
      <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center gap-6 mb-12">
        <CarouselSponsor />
      </div>
    </section>
  );
}

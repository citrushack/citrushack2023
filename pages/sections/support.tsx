import { SupportCard } from '@/components/SupportCard';

export default function Support() {
  const cards = [
    {
      title: 'Mentors',
      description:
        'Mentors are in charge of helping the hackers with new technologies and working through any bugs or obstacles they encounter. We recommend this position if you are well versed in a particular stack to offer the best guidance.',
      buttonLabel: 'Apply',
      buttonLink: 'https://forms.gle/DDdaTdDrxVierqwi9',
    },
    {
      title: 'Volunteers',
      description:
        'Volunteers help out with the majority of day-of event tasks including, but not limited to, matching hackers to mentors, helping hackers find teams, hosting activities, and answering general questions.',
      buttonLabel: 'Apply',
      buttonLink: 'https://forms.gle/vwRa9wkwBdnBXFuFA',
    },
    {
      title: 'Sponsors',
      description:
        "Sponsors are companies or individuals that want to help Cutie Hack and Citrus Hack come to life! If you are interested in contributing, please don't hesitate to contact us!",
      buttonLabel: 'Sponsor',
      buttonLink: '/citrushack-2022-sponsorship-packet.pdf',
    },
  ];

  return (
    <section className="flex flex-col w-full h-full max-w-[60rem] my-12 lg:mt-0 justify-center items-center">
      <h1 className="text-center text-7xl font-black w-391 h-109 not-italic items-center mt-6">Support</h1>
      <p className="w-1050 h-58 font-weight-400 text-2xl leading-7 text-center font-normal pt-10">
        Not interested in hacking but still want to participate? Great! We would
        love to have you on board. Fill out the forms below if you&apos;d like
        to help hackers throughout the day!
      </p>
      <div className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap justify-center gap-6 mb-12">
        {cards.map(({ title, description, buttonLabel, buttonLink }) => (
          <SupportCard
            key={title}
            title={title}
            description={description}
            buttonLabel={buttonLabel}
            buttonLink={buttonLink}
          />
        ))}
      </div>
    </section>
  );
}

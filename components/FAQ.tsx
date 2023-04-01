import React, { useState } from 'react';
import { BiX } from 'react-icons/bi';
import ExternalLink from '@/components/ExternalLink';

interface Props {
  /** Heading for accordion. */
  question: string;
  /** Content in accordion, which could be a string or HTML elements. */
  answer: string | React.ReactNode;
}

/** Accordion for a single FAQ. */
export function FaqAccordion({ question, answer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col w-full border-b-2 border-sub">
      <div
        className="flex py-3 items-center hover:text-highlight cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h4 className="grow font-bold text-lg text-text">{question}</h4>
        <div>
          <BiX
            className={
              'text-4xl transform-gpu transition-transform duration-150 ' +
              (open ? 'rotate-0' : 'rotate-45')
            }
          />
        </div>
      </div>
      <div
        className={
          'transition-size overflow-hidden duration-250 h-full ' +
          (open ? 'max-h-[30rem]' : 'max-h-0')
        }
      >
        {typeof answer === 'string' ? (
          <p className="m-0 mb-8 text-base text-text">{answer}</p>
        ) : (
          <div className="m-0 mb-8 text-base text-text">{answer}</div>
        )}
      </div>
    </div>
  );
}

const faq = [
  {
    question: 'What is a hackathon?',
    answer:
      'A hackathon is an event where teams or inviduals rush to make a creative project. Throughout, there will be free workshops intended to guide you in creating your project. At the end of the time slot, contestants have the opportunity to demo their projects to judges and win prizes.'
  },
  {
    question: 'How do I apply?',
    answer:
      'You need to sign in first with your Google account. The application form is then accessible on the website after signing in.'
  },
  {
    question: 'When are applications due?',
    answer:
      'Applications are due by midnight on Friday, April 28, 2023. Be sure to submit your application before then in order to participate.'
  },
  {
    question: 'Is Citrus Hack free?',
    answer:
      'Applying and attending Citrus Hack is completely free! You’ll get access to mentors, workshops, and prizes at no extra cost.'
  },
  {
    question: 'How long is Citrus Hack?',
    answer: 'Citrus Hack will be a 24-hour event.'
  },
  {
    question: 'Who can come to Citrus Hack?',
    answer:
      'We welcome anyone from any high school or undergrad college to come out and hack with us.'
  },
  {
    question: 'Where is the event?',
    answer:
      'The event will be in-person and will be located in Winston Chung Hall at the University of California, Riverside.'
  },
  {
    question: "What if I've never been to a hackathon before?",
    answer:
      "That's the best reason to come out! Citrus Hack is open to people of all skill-levels. We'll have workshops and activities, along with mentors to help get you started and turn your project into reality."
  },
  {
    question: 'What will I need to participate?',
    answer:
      'You should bring a working device, charger, and create a Discord to get notifications.'
  },
  {
    question: 'Where will we submit?',
    answer:
      'You will submit through Devpost. Further instructions will follow on the day-of the event.'
  },
  {
    question: 'Can I submit a project I’ve already worked on?',
    answer:
      'No, you must start working on project code after hacking starts at 9am PST. Projects started before that time or have been submitted to other hackathons will be disqualified. Make sure your submission is unique to Citrus Hack!'
  },
  {
    question: "What if I don't have a team?",
    answer:
      "If you don't have a team formed prior to Citrus Hack, we will have a channel on Discord where you can find other participants that share similar interests. We'll also be providing activities at the beginning of the event to help you form teams. Teams aren't required though, so feel free to work individually."
  },
  {
    question: 'Do I have to hack or make a project?',
    answer:
      "Not at all! You can attend a workshop just to learn, network with fellow hackers, and participate in games and raffles. You'll be able to find the schedule on our website as we get closer to the event."
  },
  {
    question: 'Is there an online option to attend?',
    answer: 'Unfortunately no, Citrus Hack is in-person only.'
  },
  {
    question: "My question isn't listed?",
    answer: (
      <p className="text-text">
        Feel free to email us at{' '}
        <ExternalLink
          name="citrushack@gmail.com"
          link="mailto:citrushack@gmail.com"
        />{' '}
        or ask Mika Shanela in-person if you have any more questions.
      </p>
    )
  }
];

export const FaqGrid = () => (
  <>
    {faq.map(({ question, answer }) => (
      <FaqAccordion key={question} question={question} answer={answer} />
    ))}
  </>
);

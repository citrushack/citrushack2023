import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProfileProps {
  /** Link to the lead's LinkedIn profile. */
  link: string;
  /** Profile picture of the lead. */
  image: string;
  /** Name of the lead. */
  name: string;
  /** Role/title of the lead. */
  role: string;
}

/** Individual profile for each team lead. */
export const TeamProfile = ({ link, image, name, role }: ProfileProps) => (
  <div className="flex flex-col w-full max-w-[8rem] md:max-w-[9rem] items-center">
    <motion.span whileHover={{ y: -4 }} className="cursor-pointer">
      <a target="_blank" rel="noreferrer noopener" href={link}>
        <Image
          src={image}
          width={170}
          height={170}
          objectFit="contain"
          // for performance
          priority={false}
          // for performance
          quality={0}
          className="rounded-full mt-5"
          alt="profile photo"
        />
      </a>
    </motion.span>
    <p className="mb-0 w-max font-baloo_semi_bold text-sub">{name}</p>
    <p className="mt-0 leading-4 text-center font-baloo_regular text-opposite">
      {role}
    </p>
  </div>
);

const directors = [
  {
    link: 'https://www.linkedin.com/in/henry-zheng00/',
    image: '/leads/Henry.png',
    name: 'Henry Zheng',
    role: 'Director'
  },
  {
    link: 'https://www.linkedin.com/in/mariam-golwalla-74930949/',
    image: '/leads/Mariam.png',
    name: 'Mariam Golwalla',
    role: 'Director'
  }
];
const staff = [
  {
    link: 'https://www.linkedin.com/in/minsookime/',
    image: '/leads/minsookim.png',
    name: 'Minsoo Kim',
    role: 'Lead Software Engineer'
  },
  {
    link: 'https://www.linkedin.com/in/nathan-melwani/',
    image: '/leads/Nate.png',
    name: 'Nate Melwani',
    role: 'Web Dev Lead'
  },
  {
    link: 'https://www.linkedin.com/in/ashley-h-pham',
    image: '/leads/Ash.png',
    name: 'Ashley Pham',
    role: 'Operations Lead'
  },
  {
    link: 'https://www.linkedin.com/in/kanin-liang/',
    image: '/leads/Kanin.png',
    name: 'Kanin Liang',
    role: 'Operations Lead'
  },
  {
    link: 'https://www.linkedin.com/in/prathmeshjain/',
    image: '/leads/Prathmesh.png',
    name: 'Prathmesh Jain',
    role: 'Operations Lead'
  },
  {
    link: 'https://www.linkedin.com/in/jakin200/',
    image: '/leads/Jakin.png',
    name: 'Jakin Chan',
    role: 'Operations Lead'
  },
  {
    link: 'https://www.linkedin.com/in/viviane-fernando-60282018b/',
    image: '/leads/Viviane_.png',
    name: 'Viviane Fernando',
    role: 'Marketing Lead'
  },
  {
    link: 'https://www.linkedin.com/in/sarahkim9/',
    image: '/leads/Sarah.png',
    name: 'Sarah Kim',
    role: 'Marketing Lead'
  },
  {
    link: 'https://www.linkedin.com/in/gabriela-h-alvarez/',
    image: '/leads/Gabs.png',
    name: 'Gabriela Alvarez',
    role: 'Sponsorships Lead'
  },
  {
    link: 'https://www.linkedin.com/in/alex-c-hsieh/',
    image: '/leads/Alex_.png',
    name: 'Alex Hsieh',
    role: 'Sponsorships Lead'
  },
  {
    link: 'https://www.linkedin.com/in/jonathanchon/',
    image: '/leads/Jon.png',
    name: 'Jonathan Chon',
    role: 'UI/UX Lead'
  }
];

/** Grid of team lead profiles. */
export const TeamGrid = () => (
  <>
    <div className="flex flex-wrap justify-center gap-8 md:gap-12 md:gap-y-12 mb-12">
      {directors.map(({ link, image, name, role }) => (
        <TeamProfile
          key={link}
          link={link}
          image={image}
          name={name}
          role={role}
        />
      ))}
    </div>
    <div className="flex flex-wrap justify-center gap-8 md:gap-12 md:gap-y-12">
      {staff.map(({ link, image, name, role }) => (
        <TeamProfile
          key={link}
          link={link}
          image={image}
          name={name}
          role={role}
        />
      ))}
    </div>
  </>
);

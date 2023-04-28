/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

interface ProfileProps {
  /** Profile picture of the judge. */
  image: string;
  /** Name of the judge. */
  name: string;
  /** Role/title of the judge. */
  role: string;
}

/** Individual profile for each team lead. */
export const JudgeProfile = ({ image, name, role }: ProfileProps) => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col w-full max-w-[8rem] md:max-w-[9rem] items-center relative z-[100]">
      <motion.span whileHover={{ y: -4 }}>
        <Image
          src={image}
          width={150}
          height={150}
          objectFit="contain"
          priority={true}
          quality={100}
          className="rounded-full"
        />
      </motion.span>
      <p className="mb-0 w-max font-semibold">{name}</p>
      <p
        className={`mt-0 leading-4 text-base text-center ${
          theme === 'dark' ? `text-gold` : `text-brown`
        }`}
      >
        {role}
      </p>
    </div>
  );
};

const judges = [
  {
    image: '/assets/judges/elmer-thomas.jpg',
    name: 'Allan Knight',
    role: 'UCR Professor'
  },
  {
    image: '/assets/judges/paea-lependu.jpg',
    name: 'Walid Najar',
    role: 'UCR Professor'
  },
  {
    image: '/assets/judges/craig-schroeder.jpg',
    name: 'Qian Zhang',
    role: 'UCR Professor'
  },
  {
    image: '/assets/judges/fuad-jamour.jpg',
    name: 'Michail Falutsos',
    role: 'UCR Professor'
  },
  {
    image: '/assets/judges/jed-schwendiman.jpg',
    name: 'Ryan Rusich',
    role: 'UCR Professor'
  },
  {
    image: '/assets/judges/jia-chen.jpg',
    name: 'Ryan Quach',
    role: 'PhD Student'
  },
  {
    image: '/assets/judges/allan-knight.jpg',
    name: 'Danial Beg',
    role: 'Software Engineer @ BAE Systems'
  },
  {
    image: '/assets/logo.svg',
    name: 'Jonathan Trinh',
    role: 'Embedded Software Engineer'
  },
  {
    image: '/assets/judges/cristina-lawson.jpg',
    name: 'Rajbir Johar',
    role: 'UX/Frontend Engineer'
  },
  {
    image: '/assets/judges/diane-shan.jpg',
    name: 'Kimmy Lac',
    role: 'Marketing @ Hashicorp'
  },
  {
    image: '/assets/judges/jonathan-trinh.jpg',
    name: 'Justin Lee',
    role: 'VP of Cyber'
  },
  {
    image: '/assets/judges/chloe-georgiou.jpg',
    name: 'Krystal Pothilat',
    role: 'President of WinC@UCR'
  },
  {
    image: '/assets/judges/minsoo-kim.jpg',
    name: 'Sid Dutta',
    role: 'Secretary of Cyber@UCR'
  },
  {
    image: '/assets/judges/siddharta-dutta.jpg',
    name: 'Ashley Kim',
    role: 'Director of Rose Hack'
  },
  {
    image: '/assets/judges/charles-hong.jpg',
    name: 'Vinz Madrigal',
    role: 'Former President of ACM@UCR'
  },
  {
    image: '/assets/judges/elaine-lin.jpg',
    name: 'Ashley Tsai',
    role: 'Director of Design@UCR'
  },
  {
    image: '/assets/judges/mitha-senthilkumar.jpg',
    name: 'Arlene Phimmasone',
    role: 'Former Director of Design@UCR'
  },
  {
    image: '/assets/judges/tim-jenkins.jpg',
    name: 'Bowen Lai',
    role: 'Treasurer of Gamespawn'
  },
  {
    image: '/assets/judges/elise-lin.jpg',
    name: 'Chloe Georgiou',
    role: 'President of IEEE'
  },
  {
    image: '/assets/judges/katie-fukuda.jpg',
    name: 'Westin Montano',
    role: 'Previous Citrus Hack Operations Lead'
  },
  {
    image: '/assets/judges/danial-beg.jpg',
    name: 'Prathmesh Jain',
    role: 'Vice President of Gamespawn'
  },
  {
    image: '/assets/judges/kanin-liang.jpg',
    name: 'Everlee Mai',
    role: 'Events Coordinator of Gamespawn'
  },
  {
    image: '/assets/judges/michael-odea.jpg',
    name: 'Roy Feng',
    role: 'Former President of ACM@UCR'
  },
  {
    image: '/assets/judges/neo-marin.jpg',
    name: 'Hallie Pham',
    role: 'Director of Rose Hack'
  },
  {
    image: '/assets/judges/sunny-zeng.jpg',
    name: 'Gryphon Kumfert',
    role: 'Infrastructure Lead of Cyber@UCR'
  },
  {
    image: '/assets/judges/alex-chen.jpg',
    name: 'Jino Sirivatanarat',
    role: 'Former Vice President of ACM@UCR'
  },
  {
    image: '/assets/judges/alex-chen.jpg',
    name: 'Isean Bhanot',
    role: 'ACM Membership Chair'
  },
  {
    image: '/assets/judges/alex-chen.jpg',
    name: 'Vincent Raimondi',
    role: 'Ratheon Software Engineer'
  }
];

/** Grid of judge profiles. */
export const JudgeGrid = () => (
  <div className="flex flex-wrap justify-center mb-10 gap-6 md:gap-12 md:gap-y-12">
    {judges.map(({ image, name, role }) => (
      <JudgeProfile key={name} image={image} name={name} role={role} />
    ))}
  </div>
);

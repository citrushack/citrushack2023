import Image from 'next/image';
import { useTheme } from 'next-themes';

import bus_footer from '@/public/assets/bus_footer.svg';
import bus_footer_dark from '@/public/assets/bus_footer_dark.svg';
import { motion } from 'framer-motion';
import {
  FiMail,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin
} from 'react-icons/fi';
export default function Footer() {
  const { theme } = useTheme();

  const socials = [
    {
      icon: <FiMail title="Email" />,
      link: 'mailto:citrushack@gmail.com'
    },
    {
      icon: <FiFacebook title="Facebook" />,
      link: 'https://www.facebook.com/CitrusHack'
    },
    {
      icon: <FiInstagram title="Instagram" />,
      link: 'https://www.instagram.com/citrushack_ucr'
    },
    {
      icon: <FiTwitter title="Twitter" />,
      link: 'https://twitter.com/citrushack'
    },
    {
      icon: <FiLinkedin title="LinkedIn" />,
      link: 'https://www.linkedin.com/company/citrus-hack'
    }
  ];

  return (
    <div className="w-full">
      <div className="relative top-2">
        {/* dark comes first to see if bug shows dark mode svgs on light mode */}
        {theme === 'dark' ? (
          <Image
            src={bus_footer_dark}
            alt="footer"
            objectFit="contain"
            layout="responsive"
          />
        ) : (
          <Image
            src={bus_footer}
            alt="footer"
            objectFit="contain"
            layout="responsive"
            className=""
          />
        )}
      </div>
      <div
        className={` ${
          theme === 'dark' ? `bg-[#397411]` : `bg-[#72C03F]`
        } flex flex-col justify-center items-center w-full h-full`}
      >
        <footer className="flex justify-center w-full py-4 bg-primary">
          <div className="flex flex-col gap-2 items-center w-full mx-4 text-md font-semibold">
            <p className="text-center">
              Made with {theme === 'dark' ? '🤍' : '🖤'} by the Citrus Hack Team
            </p>

            <div className="flex gap-2.5 text-2xl relative z-30">
              {socials.map(({ icon, link }) => (
                <a
                  key={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  href={link}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="cursor-pointer hover:text-slate-300"
                  >
                    {icon}
                  </motion.div>
                </a>
              ))}
            </div>
            <p className="text-sm mr-4">Copyright © 2023</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

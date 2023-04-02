import Image from 'next/image';
import { useTheme } from 'next-themes';

import bus_footer from '@/public/assets/bus_footer.svg';
import bus_footer_dark from '@/public/assets/bus_footer_dark.svg';
import { motion } from 'framer-motion';
import { FiMail, FiInstagram, FiLinkedin } from 'react-icons/fi';
import { BsBalloonHeartFill } from 'react-icons/bs';

export default function Footer() {
  const { theme } = useTheme();

  const socials = [
    {
      icon: <FiMail title="Email" />,
      link: 'mailto:citrushack@gmail.com'
    },
    {
      icon: <FiInstagram title="Instagram" />,
      link: 'https://www.instagram.com/citrushack_ucr'
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
            draggable={false}
          />
        ) : (
          <Image
            src={bus_footer}
            alt="footer"
            objectFit="contain"
            layout="responsive"
            className=""
            draggable={false}
          />
        )}
      </div>
      <div
        className={` ${
          theme === 'dark' ? `bg-[#397411]` : `bg-[#7DBC55]`
        } flex flex-col justify-center items-center w-full h-full`}
      >
        <footer className="flex justify-center w-full py-4 bg-primary">
          <div className="flex flex-col gap-0 items-center w-full text-md font-semibold">
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
                    className={`cursor-pointer  ${
                      theme === 'dark'
                        ? `hover:text-goldHover`
                        : `hover:text-[#987a5e]`
                    }`}
                  >
                    {icon}
                  </motion.div>
                </a>
              ))}
            </div>
            <a
              className={`relative z-0  ${
                theme === 'dark'
                  ? `hover:text-goldHover`
                  : `hover:text-[#987a5e]`
              }`}
              target="_blank"
              rel="noferrer noopener noreferrer"
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
            >
              MLH Code Of Conduct
            </a>
            <span className="text-center flex space-x-1">
              Made with
              {theme === 'light' ? (
                <span className="text-black">
                  <BsBalloonHeartFill />
                </span>
              ) : (
                <span className="text-goldHover">
                  <BsBalloonHeartFill />
                </span>
              )}
              by Citrus Hack Team
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

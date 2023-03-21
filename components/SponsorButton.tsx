/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import Image from 'next/image';
import sponsorButtonSvg from '../public/assets/sponsorUsButton.svg';

export default function SponsorButton({ link, width, height }) {
  return (
    <a href={link}>
      <Image src={sponsorButtonSvg} width={width} height={height} />
    </a>
  );
}

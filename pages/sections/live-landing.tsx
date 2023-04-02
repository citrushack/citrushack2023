import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { HackerCountdownWrapper } from '@/components/Countdown';
import { ButtonLink } from '@/components/ButtonLink';
import Modal from '@/components/Modal';
import { SigninForm } from '@/components/Form/SigninForm';

export default function Landing() {
  const [mounted, setMounted] = useState(false);
  const { data: session, status } = useSession();
  const [signinModalOpen, setSigninModalOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <section className="relative px-4 flex w-full min-safe-h-screen min-h-[48rem] md:min-h-[60rem] xl:max-w-[68rem] 2xl:max-w-[80rem] justify-center items-center my-40 lg:my-0 mb-20 md:mb-0 gap-6 z-30">
        <div className="lg:absolute flex flex-col left-4 2xl:left-0 items-center">
          <div className="flex flex-col max-w-xl justify-center">
            {/* <h1 className="font-baloo_bold text-5xl">CUTIE HACK</h1> */}
            <Image
              src="/assets/BigLogo.svg"
              width={3514}
              height={2252}
              quality={1}
              priority={Boolean(true)}
              objectFit="contain"
              alt=""
              placeholder="blur"
              blurDataURL="/assets/blurredLogo.png"
            />
            <p className="flex font-baloo_semi_bold text-2xl text-highlight justify-center">
              illuminate your passion
            </p>
          </div>
          <HackerCountdownWrapper date="2023-01-06T04:00:00Z" />
          {/* for unqualified applicants */}
          <p>sorry, you are not allowed to see this page! ;(</p>

          {/* for qualified applicants */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-3">
            {status === 'authenticated' &&
              session.user.uid &&
              session.user.qualified === 'yeah' &&
              !session.user.checkedIn && (
                <span className="flex justify-center w-full z-[200]">
                  <ButtonLink primary label="Check-In Now!" link="/checkin" />
                </span>
              )}
            {status === 'authenticated' &&
              session.user.uid &&
              session.user.qualified === 'yeah' && (
                <ButtonLink
                  primary
                  link="https://cutie-hack-2022.devpost.com/"
                  label="Devpost"
                  external
                />
              )}
            {status === 'authenticated' &&
              session.user.uid &&
              session.user.qualified === 'yeah' && (
                <>
                  <span className="flex justify-center w-full z-[200]">
                    <ButtonLink
                      secondary
                      label="Join Our Discord"
                      link="https://discord.com/invite/j7vCRHQPSF"
                      external
                    />
                  </span>
                  <span className="flex justify-center w-full z-[200]">
                    <ButtonLink
                      secondary
                      label="Group Dashboard"
                      link="/group/dashboard"
                    />
                  </span>
                </>
              )}
          </div>
        </div>
      </section>
      <Modal
        title="Sign In"
        description="Sign in to Cutie Hack via Google to apply and access more. No password required."
        show={signinModalOpen}
        handler={setSigninModalOpen}
      >
        <SigninForm />
      </Modal>
    </>
  );
}

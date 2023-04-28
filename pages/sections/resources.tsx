import { useSession } from 'next-auth/react';
import { ButtonLink } from '@/components/ButtonLink';

export default function Resources() {
  const { data: session, status } = useSession();

  return (
    <section className="flex flex-col w-full h-full my-12 lg:my-0 lg:mb-16 mb-20 max-w-[60rem] justify-center items-center z-[500]">
      <p className="text-5xl md:text-7xl font-black mb-4 md:mb-8 text-text">
        Resources
      </p>
      <div className="flex flex-col gap-4 w-2/3 md:w-full ">
        <ButtonLink
          primary
          link="https://citrus-hack-2023.devpost.com/"
          label="Devpost"
          external
        />
        <ButtonLink
          primary
          link="https://github.com/citrushack/CitrusHackResources/blob/main/README.md"
          label="GitHub"
          external
        />
        {/* <span className="bg-purple hover:lightPurple"> */}
        {status === 'authenticated' &&
          session.user.uid &&
          session.user.qualified === 'yeah' && (
            <ButtonLink
              primary
              label="Join Our Discord"
              link="https://discord.com/invite/j7vCRHQPSF"
              external
            />
          )}
        {/* </span> */}
      </div>
    </section>
  );
}

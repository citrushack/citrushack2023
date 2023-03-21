import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { Layout } from './Layout';

interface Props {
  /** Content of the page. */
  children: React.ReactNode | React.ReactNode[];
  /** Restrictions for a user to decide whether they can access the page (e.g. signed in, qualified, admin, etc.) */
  restrictions: string[];
  /** Title of the page displayed in the head tag. */
  title?: string;
  /** uid of accessing user to ensure only self or admin can access the page */
  uid?: string;
}

/** Page protected by specified criteria. */
export function ProtectedPage({ title, restrictions, uid, children }: Props) {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [targetDate, setTargetDate] = useState(new Date());
  const [currDate, setCurrDate] = useState(new Date());
  useEffect(() => {
    // Get the current date
    setCurrDate(new Date());

    // Set the target date
    setTargetDate(new Date('2023-04-29'));
  }, []);

  useEffect(() => {
    if (status === 'unauthenticated') {
      if (restrictions.includes('signin')) {
        toast.error('Access denied. Please sign in first!', {
          id: 'signinRestriction'
        });
        router.push('/');
      }
    } else if (status === 'authenticated') {
      if (restrictions.includes('admin') && !session.user.admin) {
        toast.error('Access denied. Unauthorized user.', {
          id: 'adminRestriction'
        });
        router.push('/');
      }
      if (restrictions.includes('applied') && session.user.uid) {
        // toast.error('Access denied. You already applied!', {id: 'appliedAlreadyRestriction'})
        router.push('/');
      }
      if (
        restrictions.includes('qualified') &&
        session.user.qualified !== 'yeah'
      ) {
        toast.error('Access denied. Unauthorized user.', {
          id: 'qualifiedRestriction'
        });
        router.push('/');
      }
      if (restrictions.includes('checkedIn') && session.user.checkedIn) {
        // toast.error('Access denied. You already checked in!', {id: 'checkedInAlreadyRestriction'})
        router.push('/');
      }
      // only the user themselves can access the user info page & admins
      if (
        restrictions.includes('self') &&
        uid != session.user.uid &&
        !session.user.admin
      ) {
        toast.error('Access denied. Unauthorized user.', {
          id: 'selfRestriction'
        });
        router.push('/');
      }
      // only availble on the day of event for signed-in users only (except admins)
      if (
        restrictions.includes('live') &&
        (uid != session.user.uid || currDate < targetDate) &&
        !session.user.admin
      ) {
        toast.error('Access denied. Unauthorized user.', {
          id: 'livePageRestriction'
        });
        router.push('/');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, session, router]);

  if (status === 'loading') {
    return (
      <Layout>
        <Head>
          <title>Cutie Hack 2022 {title && '| ' + title}</title>
        </Head>
        <section className="flex flex-col w-full items-center">
          Loading...
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>Citrus Hack 2023 {title && '| ' + title}</title>
      </Head>
      <section className="flex flex-col w-full px-4 justify-center items-center">
        {status === 'authenticated' &&
          (restrictions.includes('signin') ||
            (restrictions.includes('admin') && session.user.admin) ||
            (restrictions.includes('applied') && !session.user.uid) ||
            (restrictions.includes('qualified') &&
              session.user.qualified === 'yeah') ||
            (restrictions.includes('checkedIn') &&
              !session.user.checkedIn)) && <>{children}</>}
      </section>
    </Layout>
  );
}

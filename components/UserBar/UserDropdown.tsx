/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession, signOut } from 'next-auth/react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';
import {
  BiUser,
  BiX,
  BiGroup,
  BiLogOutCircle,
  BiHelpCircle,
  BiCategory
} from 'react-icons/bi';
import { FaDiscord } from 'react-icons/fa';

/** Dropdown for more user actions and info (e.g. app status, group page, etc.). */
export function UserDropdown() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const [userDataLink, setUserDataLink] = useState('');

  useEffect(() => {
    setUserDataLink('users/' + session.user.uid);
  }, [session]);

  /** Display information regarding app status reviews. */
  const triggerInfo = () => {
    toast(
      <div className="flex flex-col gap-3 text-base">
        <span>
          This determines your eligibility to participate in Citrus Hack.
        </span>
        <span>
          Application status will be updated within 24 hours and you will
          receive an email notification. Check back again later!
        </span>
      </div>,
      {
        id: 'appStatusInfo',
        duration: 6000
      }
    );
  };

  /** Display information regarding check-ins. */
  const triggerCheckInInfo = () => {
    toast(
      <div className="flex flex-col gap-3 text-base">
        <span>
          By checking in, you confirm your participation in Citrus Hack 2022.
        </span>
      </div>,
      {
        id: 'checkinInfo',
        duration: 4500
      }
    );
  };

  useEffect(() => {
    /** Close dropdown on page change. */
    const handleRouteChange = () => {
      setOpen(false);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [setOpen]);

  return (
    <>
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.995 }}
          className="z-[1000] flex justify-center items-center w-11 h-11 rounded-md bg-gold hover:bg-goldHover"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <BiX className="text-2xl" />
          ) : (
            <BiUser className="text-2xl" />
          )}
        </motion.button>
        <div
          className={
            'absolute top-14 right-0 w-64 p-4 rounded bg-gold shadow-md transform-gpu transition-all duration-150 ' +
            (open ? 'z-[1000] visible opacity-100' : 'z-0 invisible opacity-0')
          }
        >
          <div className="flex flex-col gap-3 items-center w-full text-lg">
            <div className="flex flex-col gap-2 items-center w-full pb-3 border-b-[1px] border-sub">
              <span className="flex text-center text-white text-base">
                Signed in as <br />
                {session.user.email}
              </span>
              {status === 'authenticated' &&
                (!session.user.uid ? (
                  <>
                    {/* <Link passHref href='/apply'>
                    <motion.button
                      whileHover={{ scale: 1.05}} 
                      whileTap={{ scale: 0.995 }}
                      className='w-full py-1.5 rounded-md bg-highlight hover:bg-goldHover font-semibold'
                      onClick={() => setOpen(!open)}
                    >
                      Apply Now!
                    </motion.button>
                  </Link> */}
                  </>
                ) : (
                  <>
                    <span className="flex text-white font-semibold text-lg">
                      Your Application Status
                      <BiHelpCircle
                        className="text-white hover:text-brown cursor-pointer text-base"
                        onClick={() => triggerInfo()}
                      />
                    </span>
                    <div
                      className={
                        'w-full py-1.5 text-center rounded-md font-semibold ' +
                        (session.user.qualified === ''
                          ? 'bg-goldHover text-white'
                          : session.user.qualified === 'yeah'
                          ? 'bg-[#9DC300] text-lime-900'
                          : 'bg-red-400 text-red-900')
                      }
                    >
                      {session.user.qualified === '' && 'Pending'}
                      {session.user.qualified === 'yeah' && 'Approved'}
                      {session.user.qualified === 'nope' && 'Rejected'}
                    </div>
                  </>
                ))}
              {/* TODO:uncomment the day before */}
              {status === 'authenticated' &&
                session.user.uid &&
                session.user.qualified === 'yeah' &&
                (!session.user.checkedIn ? (
                  <>
                    <span className="flex text-center font-semibold text-sub-bright text-sm">
                      You Haven&apos;t Checked-In
                      <BiHelpCircle
                        className="text-sub-highlight hover:text-highlight cursor-pointer"
                        onClick={() => triggerCheckInInfo()}
                      />
                    </span>
                    <Link passHref href="/checkin">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.995 }}
                        className="w-full py-1.5 rounded-md bg-highlight hover:bg-highlight font-semibold"
                        onClick={() => setOpen(!open)}
                      >
                        Check-In Now!
                      </motion.button>
                    </Link>
                  </>
                ) : (
                  <div className="w-full py-1.5 text-center rounded-md bg-[#9DC300] font-semibold">
                    Checked-In
                  </div>
                ))}
              {status === 'authenticated' &&
                session.user.uid &&
                session.user.qualified === 'yeah' && (
                  <>
                    <Link passHref href="/group/dashboard">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.995 }}
                        className="group flex items-center gap-1.5 w-full rounded-md text-sub-highlight font-semibold bg-transparent"
                        onClick={() => setOpen(!open)}
                      >
                        <div className="p-1.5 group-hover:bg-highlight group-hover:text-brown rounded-md bg-sub text-sub-bright text-2xl">
                          <BiGroup />
                        </div>
                        <div className="p-1.5 group-hover:text-brown">
                          My Group
                        </div>
                      </motion.button>
                    </Link>
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="https://discord.com/invite/j7vCRHQPSF"
                      className="w-full"
                    >
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.995 }}
                        className="group flex items-center gap-1.5 w-full rounded-md text-sub-highlight font-semibold bg-transparent"
                        onClick={() => setOpen(!open)}
                      >
                        <div className="p-1.5 group-hover:bg-highlight group-hover:text-brown rounded-md bg-sub text-sub-bright text-2xl">
                          <FaDiscord />
                        </div>
                        <div className="p-1.5 group-hover:text-brown">
                          Discord Server
                        </div>
                      </motion.button>
                    </a>
                  </>
                )}
              {status === 'authenticated' &&
                session.user.uid &&
                session.user.admin && (
                  <Link passHref href="/admin">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.995 }}
                      className="group flex items-center gap-1.5 w-full rounded-md text-sub-highlight font-semibold bg-transparent"
                      onClick={() => setOpen(!open)}
                    >
                      <div className="p-1.5 group-hover:bg-highlight group-hover:text-brown rounded-md bg-sub text-sub-bright text-2xl">
                        <BiCategory />
                      </div>
                      <div className="p-1.5 group-hover:text-brown">
                        Admin Dashboard
                      </div>
                    </motion.button>
                  </Link>
                )}
              {status === 'authenticated' &&
                session.user.uid &&
                session.user.checkedIn && (
                  <Link passHref href={userDataLink}>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.995 }}
                      className="group flex items-center gap-1.5 w-full rounded-md text-sub-highlight font-semibold bg-transparent"
                      onClick={() => setOpen(!open)}
                    >
                      <div className="p-1.5 group-hover:bg-highlight group-hover:text-text rounded-md bg-sub text-sub-bright text-2xl">
                        <BiCategory />
                      </div>
                      <div className="p-1.5 group-hover:text-highlight">
                        QR Code
                      </div>
                    </motion.button>
                  </Link>
                )}
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.995 }}
              className="group flex items-center gap-1.5 w-full rounded-md text-sub-highlight font-semibold bg-goldHover"
              onClick={() => signOut()}
            >
              <div className="p-1.5 group-hover:bg-highlight group-hover:text-brown rounded-md bg-sub text-sub-bright text-2xl">
                <BiLogOutCircle />
              </div>
              <div className="p-1.5 group-hover:text-brown">Sign Out</div>
            </motion.button>
          </div>
        </div>
      </div>
      <div
        className={
          'fixed top-0 left-0 w-full h-full transform-gpu transition-all duration-150 ' +
          (open ? 'z-[900] visible opacity-100' : 'z-0 invisible opacity-0')
        }
        onClick={() => setOpen(false)}
      />
    </>
  );
}

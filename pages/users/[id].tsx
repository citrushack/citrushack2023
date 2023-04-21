import { ProtectedPage } from '@/components/Page';
import QR from '@/components/QRCode';
import { getAllUserIds } from '@/lib/getAllUserIds';
import { getUserData } from '@/lib/getUserData';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import router from 'next/router';
import toast from 'react-hot-toast';

export default function Info({ userData }) {
  const { data: session, status } = useSession();
  const json_obj = JSON.parse(userData);
  const {
    uid,
    email,
    shirtSize,
    qualified,
    name,
    applied_after_limit,
    MLHAcknowledgement,
    pickedUpShirt,
    InPersonCheckIn
    // ...other
  } = json_obj[0];

  const approveRejectUser = (email, firstName, approved, uid) => {
    axios
      .post('/api/applications/approve-user', {
        email,
        firstName,
        approved,
        uid
      })
      .then(() => {
        toast.success('Approved selected successfully!', {
          id: 'approvedSelectedSuccess'
        });
        router.reload();
      })
      .catch(() => {
        toast.error('Uh oh. Something went wrong...', {
          id: 'approvedSelectedError'
        });
      });
  };

  const checkInInperson = () => {
    axios
      .post('/api/users/in-person-check-in', { uid })
      .then(() => {
        toast.success('In-person check in successful!', {
          id: 'approvedSelectedSuccess'
        });
        router.reload();
      })
      .catch(() => {
        toast.error('Uh oh. Something went wrong...', {
          id: 'checkInInpersonError'
        });
      });
  };

  const markTshirt = () => {
    axios
      .post('/api/users/mark-tshirt-picked-up', { uid })
      .then(() => {
        console.log('hello inside');
        toast.success('T-shirt pickup successful!', {
          id: 'markTshirtSuccess'
        });
        router.reload();
      })
      .catch(() => {
        toast.error('Uh oh. Something went wrong...', {
          id: 'markTshirtError'
        });
      });
  };

  // {
  //   _id: new ObjectId("63e4b1f210e022bb585f31b3"),
  //   name: { first: 'Minsoo', last: 'Kim' },
  //   email: 'minsooerickim@gmail.com',
  //   image: 'https://lh3.googleusercontent.com/a/AEdFTp5iWOrFskrAWo5jK4aPvfWZ60ceajGGN_zbPKAv1Q=s96-c',
  //   emailVerified: null,
  //   MLHAcknowledgement: false,
  //   admin: false,
  //   appliedAt: 2023-02-09T08:42:45.055Z,
  //   applied_after_limit: false,
  //   criteriaMet: false,
  //   firstTimeHacker: 'Yes',
  //   foodPreference: 'Meat',
  //   gender: 'Nonbinary',
  //   gid: '',
  //   grade: '2nd Year Undergraduate',
  //   graduationDate: '2023-02-16',
  //   major: 'Computer Science',
  //   participation: 'In-Person',
  //   phoneNumber: '',
  //   qualified: '',
  //   race: 'Hispanic or Latino',
  //   school: 'Abertay University',
  //   shirtSize: 'M',
  //   uid: '5ckOzWDbhHIKCMusBlqXS'
  // }

  // console.log('hello' + JSON.parse(userData));
  return (
    // only admins and the user themselves can see this page
    <ProtectedPage
      title="user info"
      restrictions={['signin', 'self']}
      uid={uid}
    >
      {/* user can only see the QR code and this text */}
      {status === 'authenticated' && !session.user.admin && (
        <>
          <p className="pb-8 text-center text-lg text-text font-bold">
            Show this QR code at Check-in and during food distribution!
          </p>
        </>
      )}
      <QR />

      {/* goodies picked up */}
      {/* only admins can see actions and additional info */}
      {status === 'authenticated' && session.user.admin && (
        <div className="flex flex-col justify-center items-center py-4">
          {InPersonCheckIn ? (
            <p className="text-green-500">Checked In!</p>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
              className="flex items-center self-center h-11 px-4 font-semibold text-lg rounded-md bg-purple text-white cursor-pointer"
              onClick={() => {
                checkInInperson();
              }}
            >
              Check-In {name.first}
            </motion.button>
          )}

          <p>
            {name.first} {name.last}
          </p>
          <p>{email}</p>
          {/* TODO: only allow people who applied before `applied_after_limit` pick up tshirt; (display ingeligible to pickup tshirt or sum) */}
          <div className="pb-4">
            {applied_after_limit ? (
              <p>
                First 200 Hacker: <span className="text-red-500">False</span>
              </p>
            ) : (
              <p>
                First 200 Hacker: <span className="text-green-500">True</span>
              </p>
            )}
          </div>
          <div className="flex flex-col pb-4 items-center text-center">
            {applied_after_limit ? (
              <span className="text-lg font-semibold text-red-500">
                Ineligible for Shirt Pick-up
              </span>
            ) : pickedUpShirt ? (
              <>
                <p>Shirt Size: {shirtSize}</p>
                <p className="text-green-500">Picked Up</p>
              </>
            ) : (
              <div>
                <p>Shirt Size: {shirtSize}</p>
                <p className="text-red-500">Not Picked Up</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.995 }}
                  className="flex items-center self-center h-11 px-4 font-semibold text-lg rounded-md bg-purple text-white cursor-pointer"
                  onClick={() => {
                    markTshirt();
                  }}
                >
                  Mark as Picked Up
                </motion.button>
              </div>
            )}
          </div>

          <p>
            Qualified:{' '}
            {qualified == '' ? (
              <span className="text-red-500">Pending</span>
            ) : (
              <span className="text-green-500">Qualified</span>
            )}
          </p>
          <div className="pb-4">
            MLHAcknowledgement:{' '}
            {MLHAcknowledgement ? (
              <span className="text-green-500">True</span>
            ) : (
              <span className="text-red-500">False</span>
            )}
          </div>
          {/* add button to check people in  */}

          {/* approve or reject user */}
          <div className="flex flex-row space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
              className="flex items-center self-center h-11 px-4 font-semibold text-lg rounded-md bg-purple text-white cursor-pointer"
              onClick={() => {
                approveRejectUser(email, name.first, true, uid);
              }}
            >
              Approve Selected
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
              className="flex items-center self-center h-11 px-4 font-semibold text-lg rounded-md bg-purple text-white cursor-pointer"
              onClick={() => {
                approveRejectUser(email, name.first, false, uid);
              }}
            >
              Reject Selected
            </motion.button>
          </div>
        </div>
      )}
    </ProtectedPage>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = await getAllUserIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const userData = JSON.parse(JSON.stringify(await getUserData(params.id)));
  return {
    props: {
      userData
    }
  };
}

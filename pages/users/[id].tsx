import { ProtectedPage } from '@/components/Page';
import QR from '@/components/QRCode';
import { getUserData } from '@/lib/getUserData';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import router from 'next/router';
import toast from 'react-hot-toast';
import { FaCheckCircle } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';

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
    // MLHAcknowledgement,
    pickedUpShirt,
    pickedUpCanes,
    checkedIn,
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

  const markCanes = () => {
    axios
      .post('/api/users/mark-canes-picked-up', { uid })
      .then(() => {
        toast.success('Canes pickup successful!', {
          id: 'markCanesSuccess'
        });
        router.reload();
      })
      .catch(() => {
        toast.error('Uh oh. Something went wrong...', {
          id: 'markCanesError'
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
      <QR />
      {status === 'authenticated' && !session.user.admin && (
        <>
          <p className="pt-8 text-center text-lg text-text font-bold">
            Show this QR Code at check-in and during food distribution!
          </p>
        </>
      )}
      {/* goodies picked up */}
      {/* only admins can see actions and additional info */}
      {status === 'authenticated' && session.user.admin && (
        <div className="flex flex-col justify-center items-center py-4">
          <span className="flex flex-col text-center">
            {name.first} {name.last}
            <br />
            {email}
          </span>
          <span>
            {applied_after_limit ? (
              <p className="flex">
                First 200 Hacker:{' '}
                <span className="text-red-500 pt-1 pl-1">
                  <AiFillCloseCircle />
                </span>
              </p>
            ) : (
              <p className="flex">
                First 200 Hacker:{' '}
                <span className="text-green-500 pt-1 pl-1">
                  <FaCheckCircle />
                </span>
              </p>
            )}
          </span>
          <span className="flex flex-row mb-4">
            Online Check-In:{' '}
            {checkedIn ? (
              <span className="text-green-500 pt-1 pl-1">
                <FaCheckCircle />
              </span>
            ) : (
              <span className="text-red-500 pt-1 pl-1">
                <AiFillCloseCircle />
              </span>
            )}
          </span>
          {InPersonCheckIn ? (
            <p className="flex">
              In-Person Check-In:{' '}
              <span className="text-green-500 pt-1 pl-1">
                <FaCheckCircle />
              </span>
            </p>
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
          <div className="flex flex-col pb-4 items-center text-center">
            {applied_after_limit ? (
              <span className="text-lg font-semibold text-red-500">
                Ineligible for Shirt Pick-up
              </span>
            ) : pickedUpShirt ? (
              <div className="mt-4 mb-2">
                <p className="flex">
                  Shirt Size: {shirtSize}{' '}
                  <span className="text-green-500 pt-1 pl-1">
                    <FaCheckCircle />
                  </span>
                </p>
              </div>
            ) : (
              <div className="mt-4 mb-1 flex flex-col justify-center items-center">
                <p className="flex">
                  T-Shirt Pickup:
                  <span className="text-red-500 pt-1 pl-1">
                    <AiFillCloseCircle />
                  </span>
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.995 }}
                  className="flex items-center self-center h-11 px-4 font-semibold text-lg rounded-md bg-purple text-white cursor-pointer"
                  onClick={() => {
                    markTshirt();
                  }}
                >
                  Mark T-Shirt Picked Up
                </motion.button>
              </div>
            )}
            {pickedUpCanes ? (
              <div className="mt-4 mb-2">
                <p className="flex">
                  Canes Pickup:{' '}
                  <span className="text-green-500 pt-1 pl-1">
                    <FaCheckCircle />
                  </span>
                </p>
              </div>
            ) : (
              <div className="mt-4 mb-2 flex flex-col justify-center items-center">
                <p className="flex">
                  Canes Pickup:
                  <span className="text-red-500 pt-1 pl-1">
                    <AiFillCloseCircle />
                  </span>
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.995 }}
                  className="flex items-center self-center h-11 px-4 font-semibold text-lg rounded-md bg-purple text-white cursor-pointer"
                  onClick={() => {
                    markCanes();
                  }}
                >
                  Mark Canes Picked Up
                </motion.button>
              </div>
            )}
          </div>
          <p className="flex pb-2">
            Qualified:{' '}
            {qualified == '' ? (
              <span className="text-red-500 pt-1 pl-1">
                <AiFillCloseCircle />
              </span>
            ) : (
              <span className="text-green-500 pt-1 pl-1">
                <FaCheckCircle />
              </span>
            )}
          </p>
          {/* <div className="pb-4 flex">
            MLHAcknowledgement:{' '}
            {MLHAcknowledgement ? (
              <span className="text-green-500 pt-1 pl-1">
                <FaCheckCircle />
              </span>
            ) : (
              <span className="text-red-500 pt-1 pl-1">
                <AiFillCloseCircle />
              </span>
            )}
          </div> */}
          <div className="flex flex-row space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
              className="flex items-center self-center h-11 px-4 font-semibold text-lg rounded-md bg-purple text-white cursor-pointer"
              onClick={() => {
                approveRejectUser(email, name.first, true, uid);
              }}
            >
              Approve Hacker
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.995 }}
              className="flex items-center self-center h-11 px-4 font-semibold text-lg rounded-md bg-purple text-white cursor-pointer"
              onClick={() => {
                approveRejectUser(email, name.first, false, uid);
              }}
            >
              Reject Hacker
            </motion.button>
          </div>
        </div>
      )}
    </ProtectedPage>
  );
}

// export async function getStaticPaths() {
//   // Return a list of possible value for id
//   const paths = await getAllUserIds();
//   return {
//     paths,
//     fallback: false
//   };
// }

export async function getServerSideProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const userData = JSON.parse(JSON.stringify(await getUserData(params.id)));
  return {
    props: {
      userData
    }
  };
}

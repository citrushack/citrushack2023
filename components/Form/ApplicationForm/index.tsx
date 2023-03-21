import React, { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
import storage from '@/lib/firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { PersonalInfo, Education, HackerApp } from './components';
import useSWR from 'swr';

export function ApplicationForm() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error } = useSWR('/api/users/count-in-person', fetcher, {
    onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
      // Never retry on 404.
      if (error.status === 404) return;

      // Only retry up to 10 times.
      if (retryCount >= 10) return;

      // Retry after 1.5 seconds.
      setTimeout(() => revalidate({ retryCount }), 1500);
    }
  });

  const { data: session } = useSession();
  const { register, handleSubmit, control } = useForm();
  const { errors } = useFormState({ control });
  const router = useRouter();
  const [clickedSubmitOnce, setClickedSubmitOnce] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

  const determineCriteriaMet = (
    grade: string,
    participation: string,
    school: string
  ) => {
    // eslint-disable-next-line no-var
    var criteria_met = true;

    // determine if criteria to participate is met
    // auto accept if
    // if undergrad && UCR
    // if undergrad && non-ucr && online
    if (
      school != 'University of California, Riverside' &&
      school != 'UCR' &&
      school != 'ucr' &&
      school != 'UC Riverside' &&
      school != 'uc riverside'
    ) {
      criteria_met = false;
    }
    if (participation == 'Online') criteria_met = true;
    if (grade === 'Graduate') criteria_met = false;

    return criteria_met;
  };

  const uploadFile = async (
    resume,
    first_name: string,
    last_name: string,
    uid: string
  ) => {
    if (fileUploaded) {
      const file = resume[0];
      const filename =
        first_name.replace(/\s/g, '') +
        '___' +
        last_name.replace(/\s/g, '') +
        '___' +
        uid +
        '.pdf';
      const fileRef = ref(storage, 'resumes/' + filename);
      const metadata = {
        contentType: 'application/pdf'
      };
      await uploadBytes(fileRef, file, metadata); // upload file
    }
  };

  const onSubmit = async ({
    first_name,
    last_name,
    gender,
    ethnicity,
    phone_number,
    food_preference,
    shirt_size,
    school,
    major,
    grade,
    grad_date,
    resume,
    first_time,
    participation
    // MLH_code_of_conduct,
    // MLH_privacy_policy,
    // MLH_communication,
  }) => {
    if (clickedSubmitOnce) {
      return;
    }
    setClickedSubmitOnce(Boolean(true));

    // eslint-disable-next-line prefer-const
    let applied_after_limit = data.numUsersInperson >= 350 ? true : false;

    // generate other user attributes
    // eslint-disable-next-line prefer-const
    let criteria_met = determineCriteriaMet(grade, participation, school);
    const uid = nanoid();

    await uploadFile(resume, first_name, last_name, uid);

    axios
      .post('/api/applications/create', {
        uid,
        first_name,
        last_name,
        gender,
        ethnicity,
        phone_number,
        food_preference,
        shirt_size,
        school,
        major,
        grade,
        grad_date,
        first_time,
        participation,
        criteria_met,
        // MLH_code_of_conduct,
        // MLH_privacy_policy,
        // MLH_communication,
        applied_after_limit
      })
      .then(() => {
        toast.success('Successfully submitted your application!', {
          id: 'submitApplicationSuccess'
        });
        router.reload();
      })
      .catch(() => {
        toast.error(
          'Uh oh. Something went wrong. If this issue persists, let us know.',
          { id: 'submitApplicationError' }
        );
        setClickedSubmitOnce(Boolean(false));
      });
  };

  const triggerErrorNotification = () => {
    if (Object.keys(errors).length > 0) {
      toast.error('Please fill out all required fields.', {
        id: 'applicationNotFilledOut'
      });
    }
  };

  return (
    <main className="flex flex-col items-center my-24 px-4 w-full">
      <h2 className="mb-6">Application Form</h2>
      <p className="pb-4 w-full sm:max-w-2xl">
        Fill out this form to apply for Cutie Hack 2022!
      </p>
      <p className="pb-4 w-full sm:max-w-2xl">
        Within 24 hours of submitting, you will be notified via email about your
        application status.
      </p>
      <form
        className="flex flex-col gap-4 w-full sm:max-w-2xl self-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <PersonalInfo session={session} register={register} errors={errors} />
        <Education register={register} errors={errors} />
        <HackerApp
          register={register}
          errors={errors}
          setFileUploaded={setFileUploaded}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.995 }}
          type="submit"
          className="w-full py-1.5 rounded bg-buttons font-semibold text-white"
          onClick={() => triggerErrorNotification()}
        >
          {clickedSubmitOnce ? 'Submitting...' : 'Submit'}
        </motion.button>
      </form>
    </main>
  );
}

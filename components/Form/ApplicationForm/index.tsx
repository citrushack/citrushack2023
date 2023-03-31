import React, { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';
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
    if (
      school == 'University of California, Riverside' &&
      (grade === '1st Year Undergraduate' ||
        grade === '2nd Year Undergraduate' ||
        grade === '3rd Year Undergraduate' ||
        grade === '4th Year Undergraduate' ||
        grade === '5th+ Year Undergraduate')
    ) {
      criteria_met = true;
    } else {
      criteria_met = false;
    }

    return criteria_met;
  };

  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const uploadFile = async (resume, first_name, last_name, email: string) => {
    if (fileUploaded) {
      const file = resume[0];
      const file_name = first_name + '_' + last_name + '_' + email;
      try {
        const base64String = await readFileAsBase64(file);
        const response = await axios.post('/api/applications/upload-pdf', {
          email: email,
          resume: base64String,
          file_name: file_name
        });

        if (response.status === 200) {
          console.log('File uploaded successfully');
        } else {
          console.error('Error uploading file');
        }
      } catch (err) {
        console.error('Error uploading file:', err);
      }
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
    participation,
    MLH_code_of_conduct,
    MLH_privacy_policy,
    MLH_communication
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

    await uploadFile(resume, first_name, last_name, session.user.email);

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
        MLH_code_of_conduct,
        MLH_privacy_policy,
        MLH_communication,
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
      <h2 className="mb-6 text-3xl font-bold">Application Form</h2>
      <p className="pb-4 w-full sm:max-w-2xl">
        Fill out this form to apply for Citrus Hack 2023!
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
          className="w-full py-1.5 rounded bg-buttons font-semibold text-white bg-purple hover:bg-hoverPrimary"
          onClick={() => triggerErrorNotification()}
        >
          {clickedSubmitOnce ? 'Submitting...' : 'Submit'}
        </motion.button>
      </form>
    </main>
  );
}

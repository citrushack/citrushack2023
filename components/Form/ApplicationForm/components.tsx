import { Session } from 'next-auth';
import { UseFormRegister, FieldValues, UseFormWatch } from 'react-hook-form';
import { Group, Input, Select, Radio, Checkbox } from '../components';
import { schools } from './schools';
import {
  genders,
  ethnicities,
  majors,
  grades,
  firstTimeHacker,
  foodPreference,
  shirtSize,
  MLH,
  awk
} from './options';

interface Props {
  session?: Session;
  register: UseFormRegister<FieldValues>;
  errors: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
  setFileUploaded?: (arg0: boolean) => void;
  watch?: UseFormWatch<FieldValues>;
}

export const PersonalInfo = ({ session, register, errors }: Props) => (
  <Group title="Personal Info">
    <div className="grid sm:grid-cols-2 gap-3">
      <Input
        type="text"
        defaultValue={
          session.user.name && session.user.name.first !== 'undefined'
            ? session.user.name.first
            : undefined
        }
        label="First Name"
        variable="first_name"
        register={register}
        errors={errors}
        required
      />
      <Input
        type="text"
        defaultValue={
          session.user.name && session.user.name.last !== 'undefined'
            ? session.user.name.last
            : undefined
        }
        label="Last Name"
        variable="last_name"
        register={register}
        errors={errors}
        required
      />
    </div>
    <div className="grid sm:grid-cols-3 gap-3">
      <Select
        label="Gender"
        variable="gender"
        register={register}
        errors={errors}
        options={genders}
      />
      <span className="sm:col-span-2">
        <Select
          label="Ethnicity"
          variable="ethnicity"
          register={register}
          errors={errors}
          options={ethnicities}
        />
      </span>
    </div>
    <div className="grid sm:grid-cols-2 gap-3">
      <Input
        type="tel"
        label="Phone Number"
        variable="phone_number"
        register={register}
        errors={errors}
        required
      />
      <Input
        type="number"
        label="Age"
        variable="age"
        register={register}
        errors={errors}
        required
      />
    </div>
    <Radio
      label="Food Preference"
      variable="food_preference"
      options={foodPreference}
      register={register}
      errors={errors}
      required
    />
    <Radio
      label="T-Shirt Size"
      variable="shirt_size"
      options={shirtSize}
      register={register}
      errors={errors}
      required
    />
  </Group>
);

export function Education({ register, errors, watch }: Props) {
  const school = watch('school');
  return (
    <Group title="Education">
      <Select
        label="School"
        variable="school"
        register={register}
        errors={errors}
        options={schools}
        required
      />
      {school === 'University of California, Riverside' && (
        <Input
          type="text"
          label="UCR SID (starts with 86...)"
          variable="ucr_sid"
          register={register}
          errors={errors}
          required
        />
      )}
      <Select
        label="Major"
        variable="major"
        register={register}
        errors={errors}
        options={majors}
        required
      />
      {school === ''}
      <div className="grid sm:grid-cols-2 gap-3">
        <Select
          label="Grade"
          variable="grade"
          register={register}
          errors={errors}
          options={grades}
          required
        />
        <Input
          type="date"
          label="Graduation Date"
          variable="grad_date"
          register={register}
          errors={errors}
          required
        />
      </div>
    </Group>
  );
}

export const HackerApp = ({ register, errors, setFileUploaded }: Props) => (
  <Group title="Hacker App">
    <Input
      type="file"
      label="Resume"
      variable="resume"
      register={register}
      errors={errors}
      onChange={() => setFileUploaded(Boolean(true))}
    />
    <Radio
      label="First time hacker?"
      variable="first_time"
      options={firstTimeHacker}
      register={register}
      errors={errors}
    />
    <span className="flex flex-col mt-4 gap-2">
      <Checkbox
        label=""
        variable="in_person_awk"
        options={awk[0]}
        register={register}
        errors={errors}
        required
      />
      <Checkbox
        label=""
        variable="MLH_code_of_conduct"
        options={MLH[0]}
        register={register}
        errors={errors}
        required
      />
      <Checkbox
        label=""
        variable="MLH_privacy_policy"
        options={MLH[1]}
        register={register}
        errors={errors}
        required
      />
      <Checkbox
        label="Optional"
        variable="MLH_communication"
        options={MLH[2]}
        register={register}
        errors={errors}
      />
    </span>
  </Group>
);

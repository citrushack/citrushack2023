import ExternalLink from '@/components/ExternalLink';

export const genders = [
  'Male',
  'Female',
  'Nonbinary',
  'Other',
  'Prefer not to say'
];

export const ethnicities = [
  'American Indian or Alaska Native',
  'Asian',
  'Black or African American',
  'Hispanic or Latino',
  'Native Hawaiian or Other Pacific Islander',
  'White',
  'Other',
  'Prefer not to say'
];

export const majors = [
  'Bioengineering',
  'Chemical Engineering',
  'Computer Engineering',
  'Computer Science',
  'Computer Science and Business Applications',
  'Data Science',
  'Electrical Engineering',
  'Environmental Engineering',
  'Materials Science and Engineering',
  'Mechanical Engineering',
  'Other STEM Major Not Listed',
  'Humanities Major',
  'Other Major'
];

export const grades = [
  'High School',
  '1st Year Undergraduate',
  '2nd Year Undergraduate',
  '3rd Year Undergraduate',
  '4th Year Undergraduate',
  '5th+ Year Undergraduate',
  'Graduate',
  'International'
];

export const firstTimeHacker = ['Yes', 'No'];

export const participation = ['In-Person', 'Online'];

export const foodPreference = ['Meat', 'Vegetarian', 'Nut Allergy'];

export const shirtSize = ['S', 'M', 'L', 'XL'];

export const MLH = [
  [
    <>
      I have read and agree to the{' '}
      <ExternalLink
        name="MLH Code of Conduct"
        link="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
      />
      .
    </>
  ],
  [
    <>
      I authorize you to share my application/registration information with
      Major League Hacking for event administration, ranking, and MLH
      administration in-line with the{' '}
      <ExternalLink name="MLH Privacy Policy" link="https://mlh.io/privacy" />.
      I further agree to the terms of both the{' '}
      <ExternalLink
        name="MLH Contest Terms and Conditions"
        link="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
      />
      &nbsp;and the{' '}
      <ExternalLink name="MLH Privacy Policy" link="https://mlh.io/privacy" />.
    </>
  ],
  [
    'I authorize MLH to send me an email where I can further opt into the MLH Hacker, Events, or Organizer Newsletters and other communications from MLH.'
  ]
];

export const awk = [
  ['I awknowledge that I will compete and participate In-Person.']
];

import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { sendEmail } from '@/lib/sendgrid';
import { getSession } from 'next-auth/react';

export default async function createApplication(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  if (session) {
    const {
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
    } = req.body;

    // input validation
    if (first_name.length > 35 || last_name.length > 35) {
      return res.status(400).json({ errror: 'An Error has occrured.' });
    }
    // eslint-disable-next-line no-var
    var expression = /[a-zA-Z]/g;
    if (expression.test(phone_number) || phone_number.trim().length > 15) {
      return res.status(400).json({ errror: 'An error has occrured.' });
    }
    const food_preference_options = ['Meat', 'Vegetarian', 'Nut Allergy'];
    if (!food_preference_options.includes(food_preference)) {
      return res.status(400).json({ errror: 'An error has occured.' });
    }
    const participation_options = ['In-Person', 'Online'];
    if (!participation_options.includes(participation)) {
      return res.status(400).json({ errror: 'An error has occured.' });
    }
    const first_time_hacker_options = ['Yes', 'No'];
    if (!first_time_hacker_options.includes(first_time)) {
      return res.status(400).json({ errror: 'An error has occured.' });
    }
    if (ethnicity.length > 64) {
      return res.status(400).json({ errror: 'An error has occured.' });
    }
    const gender_options = [
      'Male',
      'Female',
      'Nonbinary',
      'Other',
      'Prefer not to say'
    ];
    if (!gender_options.includes(gender)) {
      return res.status(400).json({ errror: 'An error has occured.' });
    }
    const shirt_size_options = ['S', 'M', 'L', 'XL'];
    if (!shirt_size_options.includes(shirt_size)) {
      return res.status(400).json({ errror: 'An error has occured.' });
    }
    if (major.length > 64) {
      return res.status(400).json({ errror: 'An error has occured.' });
    }

    // send email notification to user applying
    await sendEmail({
      email: session.user.email,
      template_id:
        process.env.SENDGRID_APPLICATION_CONFIRMATION_EMAIL_TEMPLATE_ID,
      name: first_name,
      members: '',
      invite_code: '',
      newcomer: ''
    });

    await db.collection('users').updateOne(
      {
        email: session.user.email
      },
      {
        $set: {
          uid,
          gid: '',
          name: {
            first: first_name,
            last: last_name
          },
          gender,
          race: ethnicity,
          phoneNumber: phone_number,
          foodPreference: food_preference,
          shirtSize: shirt_size,
          school,
          major,
          grade,
          graduationDate: grad_date,
          firstTimeHacker: first_time,
          participation,
          criteriaMet: criteria_met,
          MLHAcknowledgement: Boolean(
            MLH_code_of_conduct && MLH_privacy_policy && MLH_communication
          ),
          qualified: '',
          admin: false,
          appliedAt: new Date(),
          applied_after_limit: applied_after_limit,
          pickedUpShirt: false // initally false; set to true after picking up a shirt in person
        }
      }
    );

    res.status(200).json({});
  } else {
    res.status(401).json({});
  }
}

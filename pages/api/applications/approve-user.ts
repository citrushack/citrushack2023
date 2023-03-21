import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { sendEmail } from '@/lib/sendgrid';
import { getSession } from 'next-auth/react';

export default async function manualReviewApplication(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  if (session && session.user.admin) {
    const { email, firstName, approved, uid } = req.body;

    // send email notification about user's application status and update current status
    if (approved) {
      await sendEmail({
        email: email,
        template_id:
          process.env.SENDGRID_APPLICATION_ACCEPTANCE_EMAIL_TEMPLATE_ID,
        name: firstName,
        members: '',
        invite_code: '',
        newcomer: ''
      });
      await db
        .collection('users')
        .updateOne({ uid: uid }, { $set: { qualified: 'yeah' } });
    } else {
      await sendEmail({
        email: email,
        template_id:
          process.env.SENDGRID_APPLICATION_REJECTION_EMAIL_TEMPLATE_ID,
        name: firstName,
        members: '',
        invite_code: '',
        newcomer: ''
      });
      await db
        .collection('users')
        .updateOne({ uid: uid }, { $set: { qualified: 'nope' } });
    }

    res.status(200).json({});
  } else {
    res.status(401).json({});
  }
}

import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';
import { getSession } from 'next-auth/react';

export default async function checkin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  if (session) {
    const { uid } = req.body;

    await db.collection('users').updateOne(
      { uid },
      {
        $set: {
          InPersonCheckIn: true
        }
      }
    );

    res.status(200).json({});
  } else {
    res.status(401).json({});
  }
}

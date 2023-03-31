import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

import { google } from 'googleapis';
import dataUriToBuffer from 'data-uri-to-buffer';

export default async function uploadFile(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { Readable } = require('stream');
  const db = (await clientPromise).db(process.env.MONGODB_DB);
  const { email, resume, file_name } = req.body;

  const uploadToGoogleDrive = async (base64String, fileName) => {
    const jwtClient = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/drive']
    });

    const drive = google.drive({ version: 'v3', auth: jwtClient });

    const folderId = await getFolderId(drive, 'citrushack2023resumes');
    if (!folderId) {
      throw new Error('Folder not found');
    }

    // Convert base64 string to buffer
    const buffer = dataUriToBuffer(base64String);
    const readableStream = Readable.from(buffer);
    const fileMetadata = {
      name: fileName,
      parents: [folderId]
    };
    const media = {
      mimeType: 'application/pdf',
      body: readableStream
    };

    const { data } = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id,webViewLink'
    });

    return data.webViewLink;
  };

  const getFolderId = async (drive, folderName) => {
    const { data } = await drive.files.list({
      q: `mimeType='application/vnd.google-apps.folder' and trashed = false and name='${folderName}'`,
      fields: 'nextPageToken, files(id, name)'
    });

    return data.files?.[0]?.id || null;
  };

  // converting base64 to pdf and uploading to gdrive
  const viewableLink = await uploadToGoogleDrive(resume, file_name);
  console.log('Viewable link:', viewableLink);

  const result = await db.collection('users').updateOne(
    {
      email: email
    },
    { $set: { resume: viewableLink } }
  );

  if (result.modifiedCount === 1) {
    res.status(200).json({ message: 'File uploaded successfully' });
  } else {
    res.status(500).json({ message: 'Error uploading file' });
  }
}

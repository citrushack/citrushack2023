import React from 'react';
import QRCode from 'react-qr-code';
import { useSession } from 'next-auth/react';

{
  /* <QRCode value="10.191.130.206:3000/users/63dc644a883e6d7080d03f1aloc" /> */
}
export default function QR() {
  const { data: session } = useSession();
  return session ? (
    <QRCode value={'https://www.citrushack.com/users/' + session.user.uid} />
  ) : (
    <p>log in pls</p>
  );
}

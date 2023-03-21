import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { Session } from 'next-auth';
import { Toaster } from 'react-hot-toast';

import { UserBar } from '@/components/UserBar';
import { MLHBanner } from '@/components/MLHBanner';
import Nav from '@/components/Nav';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

export default function App({
  Component,
  pageProps
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <ThemeProvider enableSystem={false}>
        <MLHBanner />
        <Nav />
        <Component {...pageProps} />
        <UserBar />
        <Toaster />
      </ThemeProvider>
    </SessionProvider>
  );
}

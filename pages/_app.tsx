import '@/styles/globals.css';
import "../styles/spinner.scss";
import { Fragment } from 'react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Header from '@/components/Header';

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Fragment>
        <Header />
        <Component {...pageProps} />
      </Fragment>
    </SessionProvider>
  );
}

import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import * as googleanalytics from './api/auth/lib/googleanalytics';

import Head from 'next/head';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/tailwind.css';
import '../styles/qube.min.css';
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      googleanalytics.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Head>
        <title>We Teach Frontend</title>
        <meta name="description" content="WTF Developed by eliasmmata, powered by NextJS" />
        <link rel="icon" href="/images/favicon.png" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
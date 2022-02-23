import { SessionProvider } from 'next-auth/react';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/tailwind.css';
import { useEffect } from 'react';

/* import { useEffect } from "react"; */
export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  useEffect(() => {
    import('@themesberg/flowbite')
  }, [])
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

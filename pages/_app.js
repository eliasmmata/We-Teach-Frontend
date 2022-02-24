import { SessionProvider } from 'next-auth/react';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../styles/tailwind.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

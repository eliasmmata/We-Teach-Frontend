import { SessionProvider } from 'next-auth/react';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/tailwind.css';


export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(data, {RETURN_TRUSTED_TYPE: true})}}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

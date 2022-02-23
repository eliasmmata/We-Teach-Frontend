// import { SessionProvider } from 'next-auth/react';
import { Provider } from 'next-auth/client';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/tailwind.css';


export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider session={session}>
      <Component {...pageProps} />
    </Provider>
  );
}

import { SessionProvider } from 'next-auth/react'
import '../styles/tailwind.css'

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
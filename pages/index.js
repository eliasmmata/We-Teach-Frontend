// import 'flowbite';
import { useSession } from "next-auth/react"
import { Container } from "../components/Container";
import LoginForm from "../components/LoginForm";
import LoginOk from "../components/LoginOk";
import { Footer } from "../components/Footer";
import { Instagram } from "../components/Instagram";

import Script from 'next/script';

import dynamic from 'next/dynamic'

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });

export default function Home() {
  const { data: session, status } = useSession();
  console.log(status)
  console.log(session)

  if (!session) {
    return (
      <>
        <Container>
          <Script src="/scripts/instafeed.min.js"></Script>
          <LoginForm />
        </Container>
      </>
    )
  }

  return (
    <>
      <Container>
        <Script src="/scripts/instafeed.min.js"></Script>
        <LoginOk />
        <Instagram />
        <AblyChatComponent />
        <Footer />
      </Container>
    </>
  )
}

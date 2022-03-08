// import 'flowbite';
import { useSession } from "next-auth/react"
import { Container } from "../components/Container";
import LoginForm from "../components/LoginForm";
import LoginOk from "../components/LoginOk";
import { Footer } from "../components/Footer";
import { Instagram } from "../components/Instagram";

import { ProgressSpinner } from 'primereact/progressspinner';

import Script from 'next/script';


export default function Home() {
  const { data: session, status } = useSession()
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
        {status === "loading" && <ProgressSpinner />}
        <LoginOk />
        <Instagram />
        <Footer />
      </Container>
    </>
  )
}


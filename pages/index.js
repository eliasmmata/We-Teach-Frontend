// import 'flowbite';
import { useSession } from "next-auth/react"
import { Container } from "../components/Container";
import LoginForm from "../components/LoginForm";
import LoginOk from "../components/LoginOk";
import { Footer } from "../components/Footer";
import { Instagram } from "../components/Instagram";

import Script from 'next/script';


export default function Home() {
  const { data: session } = useSession()
  const { status } = useSession({
    required: true,
    })
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
  else if (status === "loading") {
    return <h1>LEYENDO</h1>
    }
  else return (
    <>
      <Container>
        <Script src="/scripts/instafeed.min.js"></Script>
        <LoginOk />
        <Instagram />
        <Footer />
      </Container>
    </>
  )
}

